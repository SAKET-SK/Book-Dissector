import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/books/${book._id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="text-gray-500">{book.author}</p>
        </div>
      </div>
    </Link>
  );
}
