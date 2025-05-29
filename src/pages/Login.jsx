import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../dto/AuthDTO";
import { authAPI } from "../api/authAPI";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dto = new LoginDTO(login, password);
      const user = await authAPI.login(dto);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/profile");
    } catch (err) {
      alert(err.message || "Ошибка авторизации");
    }
  };

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="bg-white rounded-lg p-4 shadow-sm mx-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Вход</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Логин"
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />
          <button
            type="submit"
            className="w-full py-2.5 bg-primary text-white rounded-button text-sm font-medium"
          >
            Войти
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
