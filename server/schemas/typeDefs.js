const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    users:[User]
    user(username: String!): User
    bracket(title: String): [Bracket!]
    
}
type User {
    _id:ID
    username:String
    email:String
<<<<<<< HEAD
}
type Auth {
    token: ID!
    user: User
}
type Mutation {
    login(email:String!,password:String!): Auth
    createUser(username:String!,email:String!,password:String!): Auth
}
`;
=======
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
    group: [{
        teamOne: { type: String },
        teamTwo: { type: String}
    }]
}`

>>>>>>> 99d1700e5fee046fb5c3d40bc2364b3b3c92014d

module.exports = typeDefs;