import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    login: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setForm({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        login: user.login || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...form };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    alert("Профиль обновлён");
    navigate("/profile");
  };

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
      <h1 className="text-xl font-bold mb-6">Настройки профиля</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">ФИО</span>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-button px-3 py-2 text-sm"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-button px-3 py-2 text-sm"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Телефон</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-button px-3 py-2 text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Логин</span>
          <input
            type="text"
            name="login"
            value={form.login}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-button px-3 py-2 text-sm"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-2.5 bg-primary text-white rounded-button text-sm font-medium"
        >
          Сохранить изменения
        </button>
      </form>
    </main>
  );
};

export default Settings;
