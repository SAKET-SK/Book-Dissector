import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import bookRoutes from "./routes/bookRoutes.js";
import chapterRoutes from "./routes/chapterRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/chapters", chapterRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
