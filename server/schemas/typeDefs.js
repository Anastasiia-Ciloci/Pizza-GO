const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Pizza {
    _id: ID
    name: String
    price: Float!
    description: String!
    image: String
  }
`;
module.exports = typeDefs;
