import express from "express";
import { getDatabaseConnection } from "./db";
import { Document } from "mongodb";

const app = express();
app.use(express.json());

app.get("/books", async (req, res) => {
  const db = getDatabaseConnection();
  const booksArray: Document[] = [];

  await db
    .collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => {
      booksArray.push(book);
    });

  return res.status(200).json(booksArray);
});

export default app;
