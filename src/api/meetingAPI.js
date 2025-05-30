const BASE_URL = "http://localhost:3000/api";

export const meetingAPI = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/meetings`);
    if (!res.ok) throw new Error("Ошибка загрузки событий");
    return res.json();
  },
};
