const mongoose = require("mongoose");
require("dotenv/config");

const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true
    });
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
