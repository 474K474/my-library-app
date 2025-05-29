const BASE_URL = "http://localhost:3000/api";

export const authAPI = {
  register: async (dto) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
    });
    if (!response.ok) throw new Error("Ошибка регистрации");
    return response.json();
  },

  login: async (dto) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
    });
    if (!response.ok) throw new Error("Ошибка входа");
    return response.json();
  },

  logout: () => {
    localStorage.removeItem("currentUser");
  },
};
