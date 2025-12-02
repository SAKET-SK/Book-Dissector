import { Link } from "react-router-dom";

export default function ChapterFlashCard({ chapter }) {
  return (
    <Link to={`/chapter/${chapter._id}`}>
      <div className="card bg-base-100 shadow hover:shadow-xl transition cursor-pointer">
        <div className="card-body">
          <h3 className="text-lg font-semibold">{chapter.title}</h3>
          <p className="text-gray-600">{chapter.summary}</p>
        </div>
      </div>
    </Link>
  );
}
