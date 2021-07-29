const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    users:[User]
    user(username:String!):User
}
type User {
    _id:ID
    username:String
    email:String
}`;

module.exports = typeDefs;