if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { DB_URL } = process.env;

const mongoose = require("mongoose");
async function db() {
  try {
    await mongoose.connect(DB_URL);
    console.log("DataBase Connect successfully!!!");
  } catch (err) {
    console.log("There is a problem.");
    console.log(err);
  }
}

module.exports = db;
