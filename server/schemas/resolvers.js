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
      bracket:async ()=>{
          return Bracket.findAll()
      }
    }
}

module.exports = resolvers;