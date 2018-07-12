const mongoose = require("mongoose");
const Schema   = mongoose.Schema; // every model file will have these first two lines

const authorSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: String
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author; // every model file will always have this 