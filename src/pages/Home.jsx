import React from "react";

const Home = () => {
    return (
        <main className="pt-16 pb-16 max-w-[375px] mx-auto">
            {/* Поисковая строка */}
            <div className="px-4 py-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="ri-search-line text-gray-400"></i>
                    </div>
                    <input
                        type="text"
                        className="search-input w-full pl-10 pr-4 py-3 bg-white border-none rounded-button shadow-sm text-sm"
                        placeholder="Поиск книг, авторов, жанров..."
                    />
                    <button className="absolute inset-y-0 right-0 px-4 py-2 bg-primary text-white rounded-r-button !rounded-button cursor-pointer">
                        <span className="text-sm">Найти</span>
                    </button>
                </div>
            </div>

            {/* Баннер */}
            <div className="px-4 mb-6">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <img
                        src="/images/lib.jpg"
                        alt="Библиотека"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <span className="text-white text-xs font-medium bg-secondary px-2 py-1 rounded-full w-fit mb-2">
                            Новость
                        </span>
                        <h2 className="text-white text-lg font-bold">
                            Открытие нового филиала в центре города
                        </h2>
                        <p className="text-white/90 text-sm mt-1">11 мая 2025</p>
                    </div>
                </div>
            </div>

            {/* Блок "О библиотеке" */}
            <div className="px-4 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h2 className="text-lg font-bold text-primary mb-3">
                        О нашей библиотеке
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Городская библиотека — это современное пространство для чтения,
                        обучения и общения. Мы предлагаем широкий выбор литературы и
                        регулярно проводим культурные мероприятия.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center">
                            <p className="text-xl font-bold text-primary">50K+</p>
                            <p className="text-xs text-gray-500">Книг</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold text-primary">15K+</p>
                            <p className="text-xs text-gray-500">Читателей</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold text-primary">12</p>
                            <p className="text-xs text-gray-500">Филиалов</p>
                        </div>
                    </div>
                    <button className="w-full py-2 bg-transparent border border-primary text-primary rounded-button text-sm font-medium cursor-pointer">
                        Подробнее
                    </button>
                </div>
            </div>

            {/* Категории */}
            <div className="px-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold text-gray-800">Категории</h2>
                    <a href="/catalog" className="text-sm text-primary font-medium cursor-pointer">
                        Все
                    </a>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {[
                        { name: "Художественная", img: "art_lit.jpg" },
                        { name: "Научная", img: "sci_lit.jpg" },
                        { name: "Детская", img: "kid_lit.jpg" },
                        { name: "Бизнес", img: "bis_lit.jpg" },
                    ].map((cat) => (
                        <div key={cat.name} className="flex flex-col items-center cursor-pointer">
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden mb-2">
                                <img src={`/images/${cat.img}`} alt={cat.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs text-center text-gray-700">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Новые поступления */}
            <div className="px-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold text-gray-800">Новые поступления</h2>
                    <a href="/catalog" className="text-sm text-primary font-medium cursor-pointer">
                        Все
                    </a>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            title: "Война и мир",
                            author: "Лев Толстой",
                            rating: 4.5,
                            status: "В наличии",
                            image: "w&p_book.webp",
                            alt: "Война и мир",
                            buttonText: "Забронировать",
                            statusColor: "green"
                        },
                        {
                            title: "Мастер и Маргарита",
                            author: "Михаил Булгаков",
                            rating: 4.9,
                            status: "В наличии",
                            image: "m&m_book.webp",
                            alt: "Мастер и Маргарита",
                            buttonText: "Забронировать",
                            statusColor: "green"
                        },
                        {
                            title: "Преступление и наказание",
                            author: "Фёдор Достоевский",
                            rating: 4.2,
                            status: "Бронь (2)",
                            image: "c&p_book.webp",
                            alt: "Преступление и наказание",
                            buttonText: "В очередь",
                            statusColor: "red"
                        },
                    ].map((book, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-sm p-3 flex cursor-pointer">
                            <div className="w-20 h-28 rounded overflow-hidden flex-shrink-0 mr-3">
                                <img src={`/images/${book.image}`} alt={book.alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold mb-1">{book.title}</h3>
                                <p className="text-xs text-gray-600 mb-1">{book.author}</p>
                                <div className="flex items-center mb-2">
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, j) => {
                                            const full = j < Math.floor(book.rating);
                                            const half = j < book.rating && j >= book.rating - 0.5 && !full;
                                            return (
                                                <i
                                                    key={j}
                                                    className={`ri-star${half ? "-half" : full ? "-fill" : "-line"} ri-xs text-yellow-400`}
                                                ></i>
                                            );
                                        })}
                                    </div>
                                    <span className="text-xs text-gray-500 ml-1">{book.rating}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className={`text-xs bg-${book.statusColor}-100 text-${book.statusColor}-700 px-2 py-1 rounded-full`}>
                                        {book.status}
                                    </span>
                                    <button className={`text-xs ${book.statusColor === "red" ? "bg-gray-200 text-gray-500" : "bg-primary text-white"} px-3 py-1 rounded-button`}>
                                        {book.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Мероприятия */}
            <div className="px-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold text-gray-800">Мероприятия</h2>
                    <a href="/meetings" className="text-sm text-primary font-medium cursor-pointer">Все</a>
                </div>
                <div className="space-y-3">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer">
                        <div className="h-32 overflow-hidden">
                            <img src="/images/meet_author.jpg" alt="Встреча с автором" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                            <div className="flex items-center mb-2">
                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">15 мая 2025</span>
                                <span className="text-xs text-gray-500 ml-2">18:00</span>
                            </div>
                            <h3 className="text-sm font-bold mb-1">Встреча с Виктором Пелевиным</h3>
                            <div className="flex items-center text-xs text-gray-600">
                                <i className="ri-map-pin-line ri-sm mr-1"></i>
                                <span>Центральный филиал</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Филиалы */}
            <div className="px-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold text-gray-800">Наши филиалы</h2>
                    <a href="/filials" className="text-sm text-primary font-medium cursor-pointer">Все</a>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-40 relative">
                        <img src="/images/map_placeholder_1280x720.png" alt="Карта филиалов" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                        <div className="flex items-start cursor-pointer">
                            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-3">
                                <i className="ri-building-line ri-lg text-primary"></i>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">Центральный филиал</h3>
                                <p className="text-xs text-gray-600">ул. Пушкина, 10</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-gray-500">09:00 - 20:00</span>
                                    <span className="mx-2 text-xs text-gray-300">|</span>
                                    <span className="text-xs text-green-600">Открыто</span>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <i className="ri-arrow-right-s-line text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
