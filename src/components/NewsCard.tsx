import React from 'react';
import { Link } from 'react-router-dom';

interface News {
    id: number;
    title: string;
    created_at: string;
    content: string;
}

interface NewsCardProps {
    news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    return (
        <div className="border p-4 mb-4 rounded shadow-lg transition-transform transform hover:scale-105">
            <h2 className="font-bold text-xl">{news.title}</h2>
            <p className="text-gray-600">{news.created_at}</p>
            <p className="mt-2">{news.content.substring(0, 100)}</p>
            <Link to={`news${news.id}`} className="text-blue-500 hover:underline">Читать далее</Link>

        </div >
    );
};

export default NewsCard;
