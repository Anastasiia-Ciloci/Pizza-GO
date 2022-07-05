// const { AuthenticationError } = require("apollo-server-express");
const { Pizza } = require("../models");

const resolvers = {
  Query: {
    Pizzas: async () => {
      return Pizza.find();
    },
  },
};

module.exports = resolvers;
