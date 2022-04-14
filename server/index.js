const {ApolloServer} = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({typeDefs, resolvers}); // typeDefs are the data and queries that are defined. functions that make calls are known as resolvers

server.listen().then(({url}) => {
  console.log(`Your API IS RUNNING AT: ${url} :)`);
})