import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Введите корректный email");
      return;
    }
    alert(`Код отправлен на ${email}`);
    navigate("/login"); // либо /reset-password
  };

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <div className="bg-white rounded-lg p-4 shadow-sm mx-4">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Восстановление пароля</h3>
        <p className="text-sm text-gray-600 mb-4">
          Введите вашу почту — мы отправим код подтверждения.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="example@mail.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-button text-sm"
            required
          />

          <button
            type="submit"
            className="w-full py-2.5 bg-primary text-white rounded-button text-sm font-medium"
          >
            Отправить код
          </button>
        </form>

        <button
          onClick={() => navigate(-1)}
          className="w-full mt-4 py-2 text-sm text-primary font-medium underline"
        >
          Вернуться назад
        </button>
      </div>
    </main>
  );
};

export default Recovery;
