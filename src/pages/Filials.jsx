import React, { useEffect, useState } from "react";
import { filialAPI } from "../api/filialAPI";
import { Link } from "react-router-dom";

const Filials = () => {
  const [filials, setFilials] = useState([]);
  const [view, setView] = useState("list"); // list | map
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    filialAPI
      .getAll()
      .then((data) => setFilials(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Филиалы</h1>
        <div className="flex gap-2">
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full text-lg ${
              view === "list"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setView("list")}
          >
            <i className="ri-list-check" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full text-lg ${
              view === "map"
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setView("map")}
          >
            <i className="ri-map-pin-line" />
          </button>
        </div>
      </div>

      {/* Пока карта не реализована */}
      {view === "map" ? (
        <div className="px-4">
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
            Карта скоро будет доступна
          </div>
        </div>
      ) : (
        <div className="px-4 space-y-4">
          {loading ? (
            <p className="text-center text-sm text-gray-500">Загрузка...</p>
          ) : filials.length === 0 ? (
            <p className="text-center text-sm text-gray-500">Нет филиалов</p>
          ) : (
            filials.map((filial) => (
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
                  <span
                    className={`text-xs px-2 py-1 rounded-full inline-block ${
                      filial.open
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {filial.open ? "Открыто" : "Закрыто"}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </main>
  );
};

export default Filials;
