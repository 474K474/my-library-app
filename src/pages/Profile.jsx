import React, { useState } from "react";

const tabs = ["Книги", "История", "Избранное"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Книги");

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      {/* Профиль */}
      <div className="px-4 py-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
            <img
              src="/images/av.jpg"
              alt="Фото профиля"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Анна Смирнова</h1>
            <p className="text-sm text-gray-600">Активный читатель с 2020 года</p>
          </div>
        </div>
      </div>

      {/* Читательский билет */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-4 text-white shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-80">Читательский билет</p>
              <p className="text-lg font-bold">№ 12345678</p>
            </div>
            <div className="w-16 h-16 bg-white rounded p-1">
              <img src="/images/QR_code.jpg" alt="QR-код" className="w-full h-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="opacity-80">Статус</p>
              <p className="font-medium">Активный</p>
            </div>
            <div>
              <p className="opacity-80">Действителен до</p>
              <p className="font-medium">11.05.2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Вкладки */}
      <div className="px-4 mb-4">
        <div className="flex border border-gray-300 rounded overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-1 text-sm font-medium ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Контент вкладок */}
      <div className="px-4 space-y-4">
        {activeTab === "Книги" && (
          <>
            <h3 className="font-bold text-gray-800">Активные книги</h3>
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex gap-3">
                <div className="w-16 h-24 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <img
                    src="/images/UP_book.webp"
                    alt="Безмолвный пациент"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Безмолвный пациент</h4>
                  <p className="text-sm text-gray-600">Алекс Михаэлидес</p>
                  <p className="text-xs text-gray-600 mt-2">Вернуть до: 25.05.2025</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <i className="ri-time-line w-3 h-3 mr-1"></i> 14 дней
                    </span>
                    <button className="text-primary text-sm font-medium">Продлить</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "История" && (
          <>
            <h3 className="font-bold text-gray-800">История посещений</h3>
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                  <i className="ri-building-line text-primary"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Центральная библиотека</h4>
                  <p className="text-xs text-gray-600">11 мая 2025, 14:30</p>
                  <p className="text-xs text-gray-600 mt-1">Взято: 1 • Возвращено: 2</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Избранное" && (
          <>
            <h3 className="font-bold text-gray-800">Избранные книги</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-28 h-40 bg-gray-200 rounded overflow-hidden mb-2">
                  <img
                    src="/images/SW_book.webp"
                    alt="Тень ветра"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-800 text-center truncate w-full">
                  Тень ветра
                </h4>
                <p className="text-xs text-gray-600 text-center truncate w-full">
                  К. Р. Сафон
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-28 h-40 bg-gray-200 rounded overflow-hidden mb-2">
                  <img
                    src="/images/NW_book.webp"
                    alt="Имя ветра"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-800 text-center truncate w-full">
                  Имя ветра
                </h4>
                <p className="text-xs text-gray-600 text-center truncate w-full">
                  П. Ротфусс
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Profile;
