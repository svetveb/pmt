import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import { Link } from 'react-router-dom';


function NewsDetail() {
    const { id } = useParams();
    // @ts-ignorets
    const { news, toggleStatus } = useContext<NewsContextType>(NewsContext);
    // @ts-ignorets
    const currentNews = news.find(item => item.id === parseInt(id));

    if (!currentNews) return <div>Новость не найдена</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{currentNews.title}</h1>
            <p className="text-gray-600 mb-2">Дата: {new Date(currentNews.date).toLocaleDateString()}</p>
            <p className="mb-4">{currentNews.content}</p>
            <button onClick={() => toggleStatus(currentNews.id)} className={`bg-${currentNews.status === 'Опубликовано' ? 'green' : 'red'}-500 text-white px-4 py-2 rounded`}>
                {currentNews.status}
            </button>

            <Link to="/" className="text-blue-500 hover:underline mt-4">Назад к списку</Link>
        </div>
    );
}

export default NewsDetail;
