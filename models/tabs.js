const mongoose = require("mongoose");
const tabSchema = new mongoose.Schema({
  artist: String,
  title: {
    type: String,
    required: true,
  },
  author: String,
  img: String,
  notation: {
    type: String
  },
  comment: String,
  request: Boolean
});

const Songs = mongoose.model("Songs", tabSchema);
module.exports = Songs;
