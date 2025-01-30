import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

function NewsForm({ mode }: { mode: 'create' | 'edit' }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('Опубликовано');
    const [role, setRole] = useState('');

    const history = useNavigate();
    // @ts-ignorets
    const { news, addNews, updateNews } = useContext<NewsContextType>(NewsContext);
    const { id } = useParams();

    useEffect(() => {
        if (mode === 'edit' && id) {
            const currentNews = news.find((item: { id: number; }) => item.id === parseInt(id));
            if (currentNews) {
                setTitle(currentNews.title);
                setContent(currentNews.content);
                setStatus(currentNews.status);
                setRole(currentNews.role);
            }
        }
    }, [news, mode, id]);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (mode === 'create') {
                addNews({ title, content, status, role });
            } else if (mode === 'edit') {
                updateNews({ id: parseInt, title, content, status, role });
            }
            // Очистка состояния после успешной операции
            setTitle('');
            setContent('');
            setStatus('Опубликовано');
            setRole('');
            history('/');
        } catch (error) {
            console.error("Ошибка при сохранении новости:", error);
        }
    }, [addNews, updateNews, history, mode, title, content, status, role, id]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Заголовок:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Содержание:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="status">Статус:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Опубликовано">Опубликовано</option>
                    <option value="Черновик">Черновик</option>
                </select>
            </div>
            <div>
                <label htmlFor="role">Роль:</label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <button type="submit">{mode === 'create' ? 'Добавить новость' : 'Обновить новость'}</button>
        </form>
    );
}

export default NewsForm;  
