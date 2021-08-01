const { AuthenticationError } = require('apollo-server-core');
const { User, Bracket } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query:{
      users:async () => {
          return User.find()
          .select('-__v -password');
      },
      user:async (parent,{username})=>{
          return User.findOne({username})
          .select('-__v -password');
      },
      brackets:async ()=>{
          return Bracket.find()
      },
     bracket: async (partent, args) => {
         return Bracket.find(args)
     }
    }, 

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user}
        },
        login: async (parent, {email, password })=> {
            const user = await User.findOne({ email});

            if(!user) {
                throw new AuthenticationError('Invalid email or password')
            }
            const correctPassword = await user.isCorrectPassword(password);

            if(!correctPassword) {
                throw new AuthenticationError('Invalid email or password')
            }

            const token = signToken(user);
            return {token, user}
        },
        addBracket: async (parent, args) => {
                const bracket = await Bracket.create(args);              
                return bracket;
            
        }
    }
}

module.exports = resolvers;