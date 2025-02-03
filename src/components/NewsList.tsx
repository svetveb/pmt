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
        <div>
            <Link to="/create" className="mb-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300">
                Добавить новость
            </Link>
            {news.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    );
};

export default NewsList;


