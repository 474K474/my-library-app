import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filialAPI } from "../api/filialAPI";

const LibraryFilial = () => {
  const { id } = useParams();
  const [filial, setFilial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      filialAPI
        .getById(id)
        .then(setFilial)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading)
    return (
      <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
        <p className="text-sm text-center text-gray-500">Загрузка филиала...</p>
      </main>
    );

  if (!filial)
    return (
      <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
        <p className="text-sm text-center text-red-500">Филиал не найден</p>
      </main>
    );

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Фото */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={filial.image}
          alt={filial.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Инфо */}
      <div className="px-4 py-4 space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">{filial.name}</h1>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <i className="ri-map-pin-line text-primary" />
          <span>{filial.address}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <i className="ri-time-line text-primary" />
          <span>{filial.hours}</span>
        </div>
        <span
          className={`inline-block text-xs px-2 py-1 rounded-full font-medium ${
            filial.open
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {filial.open ? "Открыто" : "Закрыто"}
        </span>
        <button className="w-full mt-2 py-2 text-sm bg-primary text-white rounded-button font-medium">
          Добавить в избранное
        </button>
      </div>

      {/* Описание */}
      {filial.description && (
        <div className="px-4 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Описание</h2>
          <p className="text-sm text-gray-700">{filial.description}</p>
        </div>
      )}

      {/* События */}
      {filial.events?.length > 0 && (
        <div className="px-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">События</h2>
          <div className="space-y-4">
            {filial.events.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="h-32">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {event.date}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default LibraryFilial;
