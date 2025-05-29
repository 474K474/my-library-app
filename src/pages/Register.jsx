import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterDTO } from "../dto/AuthDTO";
import { authAPI } from "../api/authAPI";


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    login: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }

  try {
    const dto = new RegisterDTO(
      form.fullName,
      form.email,
      form.phone,
      form.login,
      form.password
    );
    const user = await authAPI.register(dto);
    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/profile");
  } catch (err) {
    alert(err.message || "Ошибка при регистрации");
  }
};


  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="bg-white rounded-lg p-4 shadow-sm mx-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Регистрация</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Введите ваше полное имя"
            value={form.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@mail.ru"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="text"
            name="login"
            placeholder="Введите логин"
            value={form.login}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Повторите пароль"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />

          <div className="text-sm text-gray-700">
            Уже есть аккаунт?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-primary underline cursor-pointer"
            >
              Войти
            </span>
          </div>

          <div className="flex space-x-2 pt-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex-1 py-2.5 bg-gray-200 text-gray-700 rounded-button text-sm font-medium"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-primary text-white rounded-button text-sm font-medium"
            >
              Создать аккаунт
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
