const { gql } = require("apollo-server"); //this allows graphql language to be used so that javascript can understand it


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }
  type Query {
    users: [User!]!
  }

  enum Nationality {
    Canada
    Brazil
    Ethiopia
    Pakistan
  }
`;

module.exports = { typeDefs };