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
    }
}

module.exports = resolvers;