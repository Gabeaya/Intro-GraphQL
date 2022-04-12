const {ApolloServer} = require("apollo-server");

const server = new ApolloServer({typeDefs, resolvers}); // typeDefs are the data and queries that are defined. functions that make calls are known as resolvers

server.listen().then(() => {
  console.log(`Your API IS RUNNING AT: ${url} :)`);
})