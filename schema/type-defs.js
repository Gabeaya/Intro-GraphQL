const { gql } = require("apollo-server"); //this allows graphql language to be used so that javascript can understand it


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movies!]
    movie(name: String!): Movie!
  }

  type Movie {
    id: ID!
    name: String!
    release: int!
    twoThumbsUp: Boolean!
  }
  enum Nationality {
    Canada
    Brazil
    Ethiopia
    Pakistan
  }
`;

module.exports = { typeDefs };