import express from "express";
import Chapter from "../models/Chapter.js";

const router = express.Router();

router.post("/:bookId", async (req, res) => {
  const chapter = new Chapter({ ...req.body, bookId: req.params.bookId });
  await chapter.save();
  res.status(201).json(chapter);
});

router.get("/:bookId", async (req, res) => {
  const chapters = await Chapter.find({ bookId: req.params.bookId }).sort({ createdAt: -1 });
  res.json(chapters);
});

router.get("/chapter/:id", async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);
  res.json(chapter);
});

export default router;
