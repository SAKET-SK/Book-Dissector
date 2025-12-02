import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Chapters from "./pages/Chapters";
import ChapterView from "./pages/ChapterView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:bookId" element={<Chapters />} />
        <Route path="/chapter/:chapterId" element={<ChapterView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
