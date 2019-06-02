const mongoose = require("mongoose");

const newPost = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  data: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("post", newPost);
