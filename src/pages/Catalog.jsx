import React, { useEffect, useState } from "react";
import { bookAPI } from "../api/bookAPI";
import { Link } from "react-router-dom";

const categories = [
  "Все",
  "Художественная",
  "Научная",
  "Детская",
  "Бизнес",
  "Психология",
  "История",
];

const sortOptions = ["По популярности", "Новинки", "По алфавиту"];

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sort, setSort] = useState("По популярности");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookAPI
      .getAll()
      .then((data) => {
        const normalized = data.map((book) => ({
          ...book,
          category: book.category || "Без категории",
          rating: typeof book.rating === "number" ? book.rating : 0,
          date: book.date || "2000-01-01",
        }));
        setBooks(normalized);
        setFiltered(normalized);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = [...books];

    if (activeCategory !== "Все") {
      result = result.filter((book) => book.category === activeCategory);
    }

    switch (sort) {
      case "По алфавиту":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Новинки":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(result);
  }, [activeCategory, sort, books]);

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Поиск */}
      <div className="px-4 py-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="ri-search-line text-gray-400"></i>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-button shadow-sm text-sm"
            placeholder="Поиск книг, авторов, жанров..."
          />
        </div>
      </div>

      {/* Категории */}
      <div className="mb-4 overflow-x-auto px-4 category-scroll">
        <div className="flex space-x-2 py-1 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-chip px-3 py-1.5 rounded-full text-xs font-medium shadow-sm cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Сортировка */}
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {sortOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`sort-button px-2.5 py-1.5 text-xs rounded-button cursor-pointer ${
                  sort === s
                    ? "bg-primary/10 text-primary font-medium"
                    : "bg-white text-gray-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Книги */}
      <div className="px-4 space-y-4">
        {loading ? (
          <p className="text-center text-sm text-gray-500">Загрузка книг...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-sm text-gray-500">Книги не найдены</p>
        ) : (
          filtered.map((book) => (
            <Link 
              to={`/books/${book.id}`}
              key={book.id}
              className="bg-white rounded-lg shadow-sm p-3 flex cursor-pointer"
            >
              <div className="w-20 h-28 rounded overflow-hidden flex-shrink-0 mr-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold mb-1">{book.title}</h3>
                <p className="text-xs text-gray-600 mb-1">{book.author}</p>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => {
                      const full = i < Math.floor(book.rating);
                      const half = i < book.rating && i >= book.rating - 0.5 && !full;
                      return (
                        <i
                          key={i}
                          className={`ri-star${
                            half ? "-half" : full ? "-fill" : "-line"
                          } ri-xs text-yellow-400`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    {book.rating.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      book.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {book.available ? "В наличии" : "Бронь"}
                  </span>
                  {book.available ? (
                    <Link to={`/books/${book.id}/book`}>
                      <button className="text-xs px-3 py-1 rounded-button bg-primary text-white">
                        Забронировать
                      </button>
                    </Link>
                  ) : (
                    <button className="text-xs px-3 py-1 rounded-button bg-gray-200 text-gray-500" disabled>
                      В очередь
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
};

export default Catalog;
