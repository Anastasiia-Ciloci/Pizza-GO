const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema(
  {
    name: {
      type: String,
    },

    price: {
      type: Number,
      // get: (v) => (v / 100).toFixed(2),
      // set: (v) => v * 100,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: { getters: true },
  }
);
//create a mongoose model, use this scheema and create an object
const Pizza = model("Pizza", pizzaSchema);

module.exports = Pizza;
