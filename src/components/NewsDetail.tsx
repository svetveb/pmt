import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockNews } from '../data/mockNews';

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();
    const newsItem = id ? mockNews.find((item) => item.id === parseInt(id)) : undefined;


    if (!newsItem) {
        return (
            <div className="mb-4">
                <h1 className="text-3xl font-bold">Новость не найдена</h1>
                <Link to="/" className="text-blue-500 hover:underline">Назад</Link>
            </div>
        );
    }

    return (
        <div className="mb-4">
            <h1 className="text-3xl font-bold">{newsItem.title}</h1>
            <p className="text-gray-600">{newsItem.created_at}</p>
            <p className="mt-4">{newsItem.content}</p>
            <Link to="/" className="text-blue-500 hover:underline">Назад</Link>
        </div>
    );
};

export default NewsDetail;
