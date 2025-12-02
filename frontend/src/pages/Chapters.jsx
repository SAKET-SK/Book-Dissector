import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import ChapterFlashCard from "../components/ChapterFlashCard";

export default function Chapters() {
  const { bookId } = useParams();
  const [chapters, setChapters] = useState([]);
  const [form, setForm] = useState({ title: "", summary: "", content: "" });

  useEffect(() => {
    API.get(`/chapters/${bookId}`).then((res) => setChapters(res.data));
  }, [bookId]);

  const addChapter = async () => {
    if (!form.title) return;
    const res = await API.post(`/chapters/${bookId}`, form);
    setChapters([res.data, ...chapters]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">

      <h1 className="text-3xl font-bold mb-4">Chapters</h1>

      <div className="bg-base-100 p-5 rounded-xl shadow mb-6 space-y-3">
        <input
          className="input input-bordered w-full"
          placeholder="Chapter Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Short Summary"
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Full Content"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <button className="btn btn-primary w-full" onClick={addChapter}>
          Add Chapter
        </button>
      </div>

      <div className="grid gap-4">
        {chapters.map((chapter) => (
          <ChapterFlashCard key={chapter._id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}
