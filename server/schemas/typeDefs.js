const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    users:[User]
    user(username: String!): User
    brackets(title: String): [Bracket!]
    bracket(creator: String, title: String): [Bracket]
    
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
    group: [String]
}`


module.exports = typeDefs;