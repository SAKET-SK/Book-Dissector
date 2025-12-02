import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function ChapterView() {
  const { chapterId } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    API.get(`/chapters/chapter/${chapterId}`).then((res) => setChapter(res.data));
  }, [chapterId]);

  if (!chapter) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 space-y-4">

      <h1 className="text-4xl font-bold">{chapter.title}</h1>

      <div>
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700 mt-1">{chapter.summary}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Content</h2>
        <p className="text-gray-700 whitespace-pre-line mt-1">{chapter.content}</p>
      </div>

    </div>
  );
}
