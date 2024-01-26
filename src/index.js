import express from "express";
const app = express();
const port = 1100;

import mongoose from "mongoose";
import bookRouter from "./routes/bookRoute";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/book-store");
}

app.get("/", (req, res) => {
  res.send("Ça marche (normalement)");
});

app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Running on: http://localhost:${port}/`);
});
