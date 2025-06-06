import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { bookAPI } from "../api/bookAPI";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookAPI
      .getById(id)
      .then(setBook)
      .catch(() => setBook(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
        <p className="text-center text-sm text-gray-500">Загрузка книги...</p>
      </main>
    );
  }

  if (!book) {
    return (
      <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
        <p className="text-center text-sm text-red-500">Книга не найдена</p>
      </main>
    );
  }

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="px-4 py-4 space-y-3">
        <h1 className="text-xl font-bold text-gray-800">{book.title}</h1>
        <p className="text-sm text-gray-600">Автор: {book.author}</p>

        <span
          className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${
            book.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {book.available ? "В наличии" : "Забронирована"}
        </span>

        <Link
          to={`/books/${book.id}/book`}
          className={`block w-full mt-4 py-2 text-sm text-center rounded-button font-medium ${
            book.available ? "bg-primary text-white" : "bg-gray-300 text-gray-500 pointer-events-none"
          }`}
        >
          {book.available ? "Забронировать" : "Недоступна"}
        </Link>
      </div>
    </main>
  );
};

export default BookDetail;
