import { useEffect, useState } from "react";
import API from "../api/api";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "" });

  useEffect(() => {
    API.get("/books").then((res) => setBooks(res.data));
  }, []);

  const addBook = async () => {
    if (!form.title) return;
    const res = await API.post("/books", form);
    setBooks([res.data, ...books]);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">

      <h1 className="text-3xl font-bold mb-4">Your Books</h1>

      <div className="bg-base-100 p-5 rounded-xl shadow mb-6 space-y-3">
        <input
          className="input input-bordered w-full"
          placeholder="Book Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="input input-bordered w-full"
          placeholder="Author"
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />

        <button className="btn btn-primary w-full" onClick={addBook}>
          Add Book
        </button>
      </div>

      <div className="grid gap-4">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
