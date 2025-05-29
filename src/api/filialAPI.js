const BASE_URL = "http://localhost:3000/api";

export const filialAPI = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/filials`);
    if (!res.ok) throw new Error("Ошибка загрузки филиалов");
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`${BASE_URL}/filials/${id}`);
    if (!res.ok) throw new Error("Филиал не найден");
    return res.json();
  },
};
