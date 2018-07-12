const mongoose = require("mongoose");
const Schema   = mongoose.Schema; // every model file will have these first two lines

const bookSchema = new Schema({
  title: String,
  description: String,
  author: {type: Schema.Types.ObjectId, ref: 'Author'},
  rating: Number,
  reviews: [{reviewer: String, content: String}]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book; // every model file will always have this 