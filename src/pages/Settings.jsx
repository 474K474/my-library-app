import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    push: true,
    returnReminders: true,
    eventUpdates: false,
  });

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Настройки</h1>

        <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          {[
            { key: "push", label: "Push-уведомления" },
            { key: "returnReminders", label: "Напоминания о возврате" },
            { key: "eventUpdates", label: "Обновления событий" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-800">{label}</span>
              <div
                className={`w-12 h-6 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${
                  settings[key] ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => toggle(key)}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
                    settings[key] ? "translate-x-6" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-2.5 bg-red-100 text-red-600 rounded-button font-medium text-sm">
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
};

export default Settings;
