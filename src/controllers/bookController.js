import Book from "../models/bookModel";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.send(allBooks);
  } catch (error) {
    res.send(error);
  }
};
