import React, { useState } from 'react';
import { mockNews } from '../data/mockNews';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

const mockNewsData = [
    {
        id: 1,
        title: "Первая новость",
        content: "Содержание первой новости",
        created_at: "2025-01-15"
    },
];

const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>(mockNewsData);

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
                    <Link to="/create" className="px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
                        Добавить новость
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewsList;
