<<<<<<< HEAD
const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


=======
const { AuthenticationError } = require('apollo-server-core');
const { User, Bracket } = require('../models')
const { signToken } = require('../utils/auth');

>>>>>>> 56595455377647e39d967e1e7ed34b67809ee779
const resolvers = {
    Query:{
      me: async (parent,args,context) => {
        if(context.user){
        const userData = await User.findOne({_id: context.user._id})
        .select('-__v -password')

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
      users:async () => {
          return User.find()
          .select('-__v -password');
      },
      user:async (parent,{username})=>{
          return User.findOne({username})
          .select('-__v -password');
<<<<<<< HEAD
      }
    },
    Mutation:{
        createUser: async (parent,args) => {
            const user = await User.create(args);
            const token  = signToken(user);

            return { token,user };

        },
        login: async (parent,{email,password}) => {
            const user = await User.findOne({email});
            if(!user){
                throw new AuthenticationError('Incorrect credentidals');
            }
            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token,user };
=======
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
>>>>>>> 56595455377647e39d967e1e7ed34b67809ee779
            
        }
    }
}

module.exports = resolvers;