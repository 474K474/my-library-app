import React, { useState } from "react";

const filials = [
  {
    name: "Центральная библиотека",
    address: "ул. Пушкина, 15",
    hours: "09:00 - 20:00",
    distance: "0.8 км",
    status: "Открыто",
    type: "Основной",
    image: "central_lib.jpg",
    open: true,
  },
  {
    name: "Детская библиотека №3",
    address: "ул. Гоголя, 42",
    hours: "10:00 - 18:00",
    distance: "1.2 км",
    status: "Открыто",
    type: "Детский",
    image: "kid_lib.jpg",
    open: true,
  },
  {
    name: "Научная библиотека",
    address: "пр. Ломоносова, 28",
    hours: "09:00 - 18:00",
    distance: "2.5 км",
    status: "Закрыто",
    type: "Научный",
    image: "sci_lib.jpg",
    open: false,
  },
];

const Filials = () => {
  const [tab, setTab] = useState("map");

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Заголовок */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Филиалы библиотеки</h1>
        <p className="text-gray-600 text-sm">
          Найдите ближайший филиал и узнайте часы работы и услуги.
        </p>
      </div>

      {/* Переключатель "Карта/Список" */}
      <div className="px-4 mb-4">
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium ${
              tab === "map"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => setTab("map")}
          >
            <i className="ri-map-pin-line mr-2" /> Карта
          </button>
          <button
            className={`flex-1 py-2 px-4 text-sm font-medium ${
              tab === "list"
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => setTab("list")}
          >
            <i className="ri-list-check mr-2" /> Список
          </button>
        </div>
      </div>

      {/* Контент — Карта */}
      {tab === "map" && (
        <div className="px-4">
          <div className="map-container h-[300px] rounded shadow-sm overflow-hidden mb-4">
            <img
              src="/images/map_placeholder_1280x720.png"
              alt="Карта"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded shadow-sm p-4 mb-4">
            <h3 className="font-bold text-gray-800 mb-4">Ближайшие филиалы</h3>
            <div className="space-y-4">
              {filials.map((filial) => (
                <div
                  key={filial.name}
                  className="branch-card border border-gray-200 rounded p-4 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={`/images/${filial.image}`}
                        alt={filial.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 truncate">
                          {filial.name}
                        </h3>
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            filial.open
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          <i
                            className={`${
                              filial.open
                                ? "ri-checkbox-circle-fill"
                                : "ri-close-circle-fill"
                            } w-3 h-3 mr-1`}
                          />
                          {filial.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{filial.address}</p>
                      <p className="text-sm text-gray-600 mt-1">{filial.hours}</p>
                      <p className="text-sm text-primary font-medium mt-2">{filial.distance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Контент — Список */}
      {tab === "list" && (
        <div className="px-4 space-y-4">
          {filials.map((filial) => (
            <div
              key={filial.name}
              className="branch-card border border-gray-200 rounded p-4 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={`/images/${filial.image}`}
                    alt={filial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-800 truncate">
                      {filial.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        filial.open
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <i
                        className={`${
                          filial.open
                            ? "ri-checkbox-circle-fill"
                            : "ri-close-circle-fill"
                        } w-3 h-3 mr-1`}
                      />
                      {filial.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{filial.address}</p>
                  <p className="text-sm text-gray-600 mt-1">{filial.hours}</p>
                  <p className="text-sm text-primary font-medium mt-2">{filial.distance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Filials;
