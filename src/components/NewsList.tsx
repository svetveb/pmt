import React, { useContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import NewsCard from './NewsCard';
import NewsForm from './NewsForm';
import { NewsContext } from '../context/NewsContext';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

interface NewsUpdates {
    title: string;
    content: string;
}

const NewsList: React.FC = () => {
    const { state, dispatch } = useContext(NewsContext);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchNews = async () => {
        try {
            const response: AxiosResponse<News[]> = await axios.get('./mockNews.json');
            dispatch({ type: 'SET_NEWS', payload: response.data }); // Используйте dispatch для обновления состояния
            localStorage.setItem('news', JSON.stringify(response.data)); // Сохранение новостей в localStorage 
        } catch (err) {
            setError('Ошибка при загрузке новостей');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedNews = localStorage.getItem('news');
        if (storedNews) {
            dispatch({ type: 'SET_NEWS', payload: JSON.parse(storedNews) }); // Используйте dispatch для обновления состояния
            setLoading(false);
        } else {
            fetchNews();
        }
    }, [dispatch]); // Добавьте dispatch в зависимости

    const updateLocalStorage = () => {
        localStorage.setItem('news', JSON.stringify(state.news));
    };

    const addNews = (newItem: NewsUpdates) => {
        const newNewsItem = {
            id: Date.now(),
            title: newItem.title,
            content: newItem.content,
            created_at: new Date().toISOString(),
        };
        dispatch({ type: 'ADD_NEWS', payload: newNewsItem });
        updateLocalStorage();
        setIsFormVisible(false);
    };

    const handleDeleteNews = (id: number) => {
        dispatch({ type: 'DELETE_NEWS', payload: id });
        updateLocalStorage();
    };

    const handleEditNews = (id: number, updates: NewsUpdates) => {
        dispatch({ type: 'EDIT_NEWS', payload: { id, updates } });
        updateLocalStorage();
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="flex flex-col items-center w-full py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 text-center lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    Новости
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {state.news.map((item) => (
                        <NewsCard
                            key={item.id}
                            news={item}
                            onDelete={() => handleDeleteNews(item.id)}
                            onEdit={(updates: NewsUpdates) => handleEditNews(item.id, updates)}
                        />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsFormVisible(true)}
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
