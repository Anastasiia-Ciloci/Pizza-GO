const db = require("../config/connection");
const { Pizza } = require("../models");
const pizzaSeed = require("./pizzaSeed.json");

db.once("open", async () => {
  try {
    // console.log("About to clean pizzas");
    await Pizza.deleteMany({});
    await Pizza.create(pizzaSeed);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
