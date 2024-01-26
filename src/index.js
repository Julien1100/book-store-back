import express from "express";
const app = express();
const port = 1100;

app.get("/", (req, res) => {
  res.send("Ça marche (normalement)");
});

app.listen(port, () => {
  console.log(`Running on: http://localhost:${port}/`);
});
