const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    users:[User]
    user(username: String!): User
    bracket(title: String): [Bracket!]
    
}
type User {
    _id:ID
    username:String
    email:String
    brackets: [Bracket]
}

type Bracket {
    _id: ID
    bracketLevel: String,
    creator: String
    createdAt: String
    seed: Int
    teams: String
    round: Int
    
    title: String
}`


module.exports = typeDefs;