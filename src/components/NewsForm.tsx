import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


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
            try {
                const response = await fetch('/mockNews.json'); // Путь к файлу в папке public 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: NewsItem[] = await response.json();
                const newsItem = data.find((item) => item.id === parseInt(id!));
                if (newsItem) {
                    setTitle(newsItem.title);
                    setContent(newsItem.content);
                } else {
                    setError('Новость не найдена');
                }
            } catch (error) {
                setError('Ошибка загрузки новостей');
            } finally {
                setLoading(false);
            }
        };

        if (isEditMode && id) {
            fetchNews();
        } else {
            setLoading(false);
        }
    }, [isEditMode, id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !content) {
            setError('Заполните все поля');
            return;
        }

        const newItem = { title, content };

        if (isEditMode && id && onEditNews) {
            onEditNews(parseInt(id), newItem); // Передаем id для редактирования 
        } else if (onAddNews) {
            onAddNews(newItem); // Передаем только title и content для создания 
        }

        navigate('/');
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h1 className="text-2xl font-bold mb-4">{isEditMode ? 'Редактировать новость' : 'Создать новость'}</h1>
            <div className="mb-4">
                <label className="block">Заголовок</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block">Содержание</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300">
                {isEditMode ? 'Сохранить' : 'Создать'}
            </button>
        </form>
    );
};

export default NewsForm;
