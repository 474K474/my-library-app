import React, { useEffect, useState } from "react";
import { bookAPI } from "../api/bookAPI";
import { filialAPI } from "../api/filialAPI";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filials, setFilials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([bookAPI.getAll(), filialAPI.getAll()])
      .then(([bookData, filialData]) => {
        setBooks(bookData.slice(0, 3));
        setFilials(filialData.slice(0, 2));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Поисковая строка */}
      <div className="px-4 py-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="ri-search-line text-gray-400"></i>
          </div>
          <input
            type="text"
            className="search-input w-full pl-10 pr-4 py-3 bg-white border-none rounded-button shadow-sm text-sm"
            placeholder="Поиск книг, авторов, жанров..."
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-primary text-white rounded-r-button !rounded-button cursor-pointer">
            <span className="text-sm">Найти</span>
          </button>
        </div>
      </div>

      {/* Баннер */}
      <div className="px-4 mb-6">
        <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/lib.jpg"
            alt="Библиотека"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <span className="text-white text-xs font-medium bg-secondary px-2 py-1 rounded-full w-fit mb-2">
              Новость
            </span>
            <h2 className="text-white text-lg font-bold">
              Открытие нового филиала в центре города
            </h2>
            <p className="text-white/90 text-sm mt-1">11 мая 2025</p>
          </div>
        </div>
      </div>

      {/* Блок "О библиотеке" */}
      <div className="px-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-bold text-primary mb-3">
            О нашей библиотеке
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Городская библиотека — это современное пространство для чтения,
            обучения и общения. Мы предлагаем широкий выбор литературы и
            регулярно проводим культурные мероприятия.
          </p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <p className="text-xl font-bold text-primary">50K+</p>
              <p className="text-xs text-gray-500">Книг</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-primary">15K+</p>
              <p className="text-xs text-gray-500">Читателей</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-primary">12</p>
              <p className="text-xs text-gray-500">Филиалов</p>
            </div>
          </div>
          <Link
            to="/history"
            className="w-full inline-block text-center py-2 bg-transparent border border-primary text-primary rounded-button text-sm font-medium cursor-pointer"
          >
            Подробнее
          </Link>
        </div>
      </div>

      {/* Новые поступления */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-primary mb-3">Новые поступления</h2>
        {loading ? (
          <p className="text-sm text-gray-500">Загрузка...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {books.map((book) => (
              <div key={book.id} className="bg-white p-2 rounded shadow-sm">
                <img
                  src={`/images/${book.image}`}
                  alt={book.title}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <h3 className="text-sm font-bold text-gray-800">{book.title}</h3>
                <p className="text-xs text-gray-500">{book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ближайшие филиалы */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-primary mb-3">Ближайшие филиалы</h2>
        {loading ? (
          <p className="text-sm text-gray-500">Загрузка...</p>
        ) : (
          <div className="space-y-3">
            {filials.map((filial) => (
              <Link
                to={`/filials/${filial.id}`}
                key={filial.id}
                className="block bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={`/images/${filial.image}`}
                    alt={filial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 space-y-1">
                  <h3 className="text-sm font-bold text-gray-800">{filial.name}</h3>
                  <p className="text-xs text-gray-600">{filial.address}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
