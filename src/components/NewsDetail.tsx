import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    created_at: string;
    status: string;
    role: string;
}

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [newsItem, setNewsItem] = useState<NewsItem | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response: AxiosResponse<NewsItem[]> = await axios.get('./mockNews.json');
                const newsData = response.data;

                const foundItem = newsData.find(item => item.id === parseInt(id!));
                setNewsItem(foundItem);
            } catch (err) {
                setError('Ошибка при загрузке новости');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!newsItem) {
        return (
            <div className="max-w-2xl mb-8 lg:w-1/2">
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
