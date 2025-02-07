// NewsForm.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

interface NewsItem {
    id: number;
    title: string;
    content: string;
}

interface NewsFormProps {
    mode: 'create' | 'edit';
    onAddNews?: (newsItem: Omit<NewsItem, 'id'>) => void;
    onEditNews?: (id: number, updatedItem: Omit<NewsItem, 'id'>) => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ mode, onAddNews, onEditNews }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const isEditMode = mode === 'edit';
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            if (isEditMode && id) {
                try {
                    const response: AxiosResponse<NewsItem[]> = await axios.get('./mockNews.json');
                    const newsData = response.data;
                    const foundItem = newsData.find(item => item.id === parseInt(id));
                    if (foundItem) {
                        setTitle(foundItem.title);
                        setContent(foundItem.content);
                    } else {
                        setError('Новость не найдена');
                    }
                } catch (err) {
                    setError('Ошибка при загрузке новости');
                    console.error(err);
                }
            }
            setLoading(false);
        };
        fetchNews();
    }, [isEditMode, id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !content) {
            setError('Заполните все поля');
            return;
        }

        try {
            const newItem = { title, content };

            if (isEditMode && id && onEditNews) {
                await axios.patch(`./mockNews.json/${id}`, newItem);
                onEditNews(parseInt(id), newItem);
            } else if (onAddNews) {
                await axios.post('./mockNews.json', newItem);
                onAddNews(newItem);
            }

            navigate('/');
        } catch (err) {
            setError('Ошибка при сохранении новости');
            console.error(err);
        }
    };

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h1 className="text-2xl font-bold mb-4">
                {isEditMode ? 'Редактировать новость' : 'Создать новость'}
            </h1>
            <div className="mb-4">
                <label className="block mb-2">Заголовок</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Содержание</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
            >
                {isEditMode ? 'Сохранить' : 'Создать'}
            </button>
        </form>
    );
};

export default NewsForm;