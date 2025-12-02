import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

router.get("/", async (req, res) => {
  const books = await Book.find().sort({ createdAt: -1 });
  res.json(books);
});

export default router;
