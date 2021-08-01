const { User, Bracket } = require('../models')

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
        addBracket: async (parent, args) => {
                const bracket = await Bracket.create(args);              
                return bracket;
            
        }
    }
}

module.exports = resolvers;