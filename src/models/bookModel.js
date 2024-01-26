import mongoose, { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: String,
  publicationDate: Date,
  genres: [String],
  synopsis: String,
  numberOfPages: Number,
});

const Book = model("Book", bookSchema);

export default Book;
