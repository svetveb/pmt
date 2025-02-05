import React, { useState } from 'react';
import { mockNews } from '../data/mockNews';
import NewsCard from './NewsCard';
import NewsForm from './NewsForm';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>(mockNews);
    const [isFormVisible, setFormVisible] = useState(false); // Состояние для управления видимостью формы

    const addNews = (newItem: { title: string; content: string }) => {
        const newNewsItem: News = {
            id: Date.now(), // Генерация уникального ID 
            title: newItem.title,
            content: newItem.content,
            created_at: new Date().toISOString() // Установка текущей даты 
        };
        setNews((prevNews) => [...prevNews, newNewsItem]);
        setFormVisible(false); // Скрываем форму после добавления новости
    };

    return (
        <section className="flex flex-col items-center w-full py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 text-center lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    Новости
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {news.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={() => setFormVisible(true)} // Показываем форму при нажатии на кнопку
                        className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Добавить новость
                    </button>
                </div>

                {/* Форма для добавления новой новости */}
                {isFormVisible && <NewsForm mode="create" onAddNews={addNews} />}
            </div>
        </section>
    );
};

export default NewsList; 
