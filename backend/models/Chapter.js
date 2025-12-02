import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  title: { type: String, required: true },
  summary: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Chapter", ChapterSchema);
