import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockNews } from '../data/mockNews';

interface NewsFormProps {
    mode: 'create' | 'edit';
    onAddNews?: (newsItem: { title: string; content: string }) => void; // Убираем id  
}

const NewsForm: React.FC<NewsFormProps> = ({ mode, onAddNews }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const isEditMode = mode === 'edit';

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (isEditMode && id) {
            const newsItem = mockNews.find((item: { id: number; }) => item.id === parseInt(id));
            if (newsItem) {
                setTitle(newsItem.title);
                setContent(newsItem.content);
            }
        }
    }, [isEditMode, id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newItem = { title, content };

        if (onAddNews) {
            onAddNews(newItem); // Передаем только title и content
        }

        navigate('/');
    };

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
