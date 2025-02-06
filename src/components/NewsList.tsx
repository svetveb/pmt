import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsForm from './NewsForm';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);
    const [isFormVisible, setFormVisible] = useState(false);

    // Функция для загрузки новостей
    const fetchNews = async () => {
        try {
            const response = await fetch('/mockNews.json'); // Путь к файлу в папке public
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.error('Ошибка при загрузке новостей:', error);
        }
    };

    useEffect(() => {
        fetchNews(); // Загружаем новости при монтировании компонента
    }, []);

    const addNews = (newItem: { title: string; content: string }) => {
        const newNewsItem: News = {
            id: Date.now(),
            title: newItem.title,
            content: newItem.content,
            created_at: new Date().toISOString(),
        };
        setNews((prevNews) => [...prevNews, newNewsItem]);
        setFormVisible(false);
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
                        onClick={() => setFormVisible(true)}
                        className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Добавить новость
                    </button>
                </div>
                {isFormVisible && <NewsForm mode="create" onAddNews={addNews} />}
            </div>
        </section>
    );
};

export default NewsList;
