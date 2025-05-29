import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bookAPI } from "../api/bookAPI";

const BookBooking = () => {
    const { id: bookId } = useParams();
    const navigate = useNavigate();
    const [pickupDate, setPickupDate] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!currentUser) {
            alert("Вы не авторизованы");
            navigate("/login");
            return;
        }

        if (!pickupDate) {
            alert("Выберите дату получения");
            return;
        }

        try {
            setSubmitting(true);
            await bookAPI.reserve({
                bookId,
                userId: currentUser.id,
                pickupDate,
            });
            alert("Книга успешно забронирована");
            navigate("/profile"); // или /catalog
        } catch (err) {
            alert(err.message || "Ошибка бронирования");
        }
        finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="pt-16 pb-16 max-w-[375px] mx-auto px-4">
            <h1 className="text-xl font-bold mb-4">Бронирование книги</h1>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
                <label className="block text-sm font-medium text-gray-700">
                    Дата получения:
                    <input
                        type="date"
                        className="mt-1 w-full border border-gray-300 rounded-button px-3 py-2 text-sm"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        required
                    />
                </label>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2 bg-primary text-white rounded-button text-sm font-medium disabled:opacity-50"
                >
                    {submitting ? "Отправка..." : "Забронировать"}
                </button>
            </form>
        </main>
    );
};

export default BookBooking;
