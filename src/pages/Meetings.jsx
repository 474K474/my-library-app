import React from "react";

const meetings = [
  {
    title: "Встреча с Виктором Пелевиным",
    date: "15 мая 2025",
    time: "18:00",
    location: "Центральный филиал",
    image: "meet_author.jpg",
  },
  {
    title: "Детский мастер-класс по иллюстрации",
    date: "20 мая 2025",
    time: "12:00",
    location: 'Филиал №3 "Детский"',
    image: "meet_kids.jpg",
  },
];

const Meetings = () => {
  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">События библиотеки</h1>

        <div className="space-y-4">
          {meetings.map((event, index) => (
            <div
              key={index}
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
                <h3 className="text-sm font-bold mb-1">{event.title}</h3>
                <div className="flex items-center text-xs text-gray-600">
                  <i className="ri-map-pin-line ri-sm mr-1"></i>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Meetings;
