const BASE_URL = "http://localhost:3000/api";

export const bookAPI = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/books`);
    if (!res.ok) throw new Error("Не удалось загрузить книги");
    return res.json();
  },

  getById: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`);
    if (!res.ok) throw new Error("Книга не найдена");
    return res.json();
  },

  reserve: async ({ bookId, userId, pickupDate }) => {
    const res = await fetch(`${BASE_URL}/books/reserve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId, userId, pickupDate }),
    });
    return res.json();
  },
};
