import React from "react";
import { useParams } from "react-router-dom";

const LibraryFilial = () => {
  const { id: _ } = useParams(); // или просто не извлекать id
 // если захотим по id передавать

  const filial = {
    name: "Центральная библиотека",
    address: "ул. Пушкина, 15",
    hours: "09:00 - 20:00",
    status: "Открыто",
    open: true,
    image: "central_lib.jpg",
    description:
      "Центральная библиотека — крупнейший филиал в городе. Предлагает широкий выбор книг, цифровые ресурсы, зоны для чтения и коворкинга.",
    events: [
      {
        title: "Книжный клуб: обсуждение романа",
        date: "18 мая 2025",
        time: "17:00",
        image: "meet_club.jpg",
      },
      {
        title: "Лекция о современной литературе",
        date: "25 мая 2025",
        time: "19:00",
        image: "meet_lit.jpg",
      },
    ],
  };

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Фото филиала */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={`/images/${filial.image}`}
          alt={filial.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Информация */}
      <div className="px-4 py-4 space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">{filial.name}</h1>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <i className="ri-map-pin-line text-lg text-primary" />
          <span>{filial.address}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <i className="ri-time-line text-lg text-primary" />
          <span>{filial.hours}</span>
        </div>

        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            filial.open ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          <i
            className={`${
              filial.open ? "ri-checkbox-circle-fill" : "ri-close-circle-fill"
            } w-3 h-3 mr-1`}
          />
          {filial.status}
        </span>

        <button className="mt-2 py-2 w-full text-sm bg-primary text-white rounded-button font-medium">
          Добавить в избранное
        </button>
      </div>

      {/* Описание */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Описание</h2>
        <p className="text-sm text-gray-700">{filial.description}</p>
      </div>

      {/* События */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Ближайшие события</h2>
        <div className="space-y-4">
          {filial.events.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={`/images/${event.image}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {event.date}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{event.time}</span>
                </div>
                <h3 className="text-sm font-bold">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default LibraryFilial;
