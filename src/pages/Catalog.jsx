import React, { useState } from "react";

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

const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    rating: 4.5,
    available: true,
    image: "w&p_book.webp",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    rating: 4.9,
    available: true,
    image: "m&m_book.webp",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    rating: 4.2,
    available: false,
    image: "c&p_book.webp",
  },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sort, setSort] = useState("По популярности");

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
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-primary text-white rounded-r-button !rounded-button cursor-pointer">
            <span className="text-sm">Найти</span>
          </button>
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
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm cursor-pointer">
              <i className="ri-filter-3-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Книги */}
      <div className="px-4 space-y-4">
        {books.map((book) => (
          <div key={book.title} className="bg-white rounded-lg shadow-sm p-3 flex cursor-pointer">
            <div className="w-20 h-28 rounded overflow-hidden flex-shrink-0 mr-3">
              <img
                src={`/images/${book.image}`}
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
                  {book.rating}
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
                <button
                  className={`text-xs px-3 py-1 rounded-button ${
                    book.available
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {book.available ? "Забронировать" : "В очередь"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Загрузить ещё */}
      <div className="mt-6 px-4 flex justify-center">
        <button className="px-4 py-2 bg-white text-primary border border-primary rounded-button text-sm font-medium cursor-pointer">
          Загрузить ещё
        </button>
      </div>
    </main>
  );
};

export default Catalog;
