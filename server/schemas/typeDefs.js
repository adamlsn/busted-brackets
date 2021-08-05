const { gql } = require('apollo-server-express');

// creating query definitions for graphQl
const typeDefs = gql`
type Query {
    me: User
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

type Auth {
    token: ID!
    user: User
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
}

type Mutation {
    addBracket(creator: String, title: String, bracketLevel: String, createdAt: String, seed: Int, teams: String, round: Int): Bracket
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
}`


module.exports = typeDefs;