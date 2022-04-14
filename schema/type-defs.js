const { gql } = require("apollo-server"); //this allows graphql language to be used so that javascript can understand it


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends: [User]
    favoriteMovies: [Movie]
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]
    movie(name: String!): Movie!
  }

  type Movie {
    id: ID!
    name: String!
    release: Int!
    twoThumbsUp: Boolean!
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = Brazil
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id:ID!): User
  }
  enum Nationality {
    Canada
    Brazil
    Ethiopia
    Pakistan
  }
`;

module.exports = { typeDefs };