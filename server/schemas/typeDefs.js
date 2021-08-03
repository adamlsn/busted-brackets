const { gql } = require('apollo-server-express');

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
<<<<<<< HEAD
}
=======
    brackets: [Bracket]
}

>>>>>>> 56595455377647e39d967e1e7ed34b67809ee779
type Auth {
    token: ID!
    user: User
}
<<<<<<< HEAD
type Mutation {
    login(email:String!,password:String!): Auth
    createUser(username:String!,email:String!,password:String!): Auth
}
`;
=======

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
    addUser(username: String!, email: String!, password: String!): Auth
}`

>>>>>>> 56595455377647e39d967e1e7ed34b67809ee779

module.exports = typeDefs;