const { User, Bracket } = require('../models')

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
      },
      bracket:async ()=>{
          return Bracket.find()
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
            
        }
    }
}

module.exports = resolvers;