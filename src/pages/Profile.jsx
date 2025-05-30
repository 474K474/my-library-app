import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../api/authAPI";

const tabs = ["Книги", "История", "Избранное"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Книги");
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    authAPI.logout();
    navigate("/login");
  };

  if (!currentUser) {
    return (
      <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
        <p className="text-sm text-center text-gray-500">Пользователь не найден</p>
      </main>
    );
  }

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
            <h1 className="text-xl font-bold text-gray-800">{currentUser.fullName}</h1>
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
              <p className="text-lg font-bold">
                № {currentUser.id.toString().padStart(8, "0")}
              </p>
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
          <p className="text-sm text-gray-500 text-center">Здесь появятся ваши книги</p>
        )}

        {activeTab === "История" && (
          <p className="text-sm text-gray-500 text-center">История будет доступна позже</p>
        )}

        {activeTab === "Избранное" && (
          <p className="text-sm text-gray-500 text-center">Список избранного пуст</p>
        )}

        <button
          onClick={handleLogout}
          className="w-full mt-6 py-2.5 bg-red-100 text-red-600 rounded-button font-medium text-sm"
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
};

export default Profile;
