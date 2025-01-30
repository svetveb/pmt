import React, { createContext, useState, useEffect } from 'react';
import { mockNews } from '../data/mockNews';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    date: string;
    status: string;
    role: string;
}

export interface NewsContextType {
    news: NewsItem[];
    currentNews: NewsItem | null;
    addNews: (news: NewsItem) => void;
    updateNews: (updatedNews: NewsItem) => void;
    deleteNews: (id: number) => void;
    toggleStatus: (id: number) => void;
}

export const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: React.ReactNode }) {
    const [news, setNews] = useState(mockNews);
    const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);

    useEffect(() => {
        //добавить логику загрузки новостей из API
    }, []);

    const addNews = (newNews: NewsItem) => {
        setNews([...news, newNews]);
    };

    const updateNews = (updatedNews: NewsItem) => {
        setNews(news.map((n) => n.id === updatedNews.id ? updatedNews : n));
    };

    const deleteNews = (id: number) => {
        setNews(news.filter((n) => n.id !== id));
    };

    const toggleStatus = (id: number) => {
        const updatedNews = news.map((n) =>
            n.id === id ? { ...n, status: n.status === 'Опубликовано' ? 'Черновик' : 'Опубликовано' } : n
        );
        setNews(updatedNews);
    };

    return (
        <NewsContext.Provider value={{ news, currentNews, addNews, updateNews, deleteNews, toggleStatus }}>
            {children}
        </NewsContext.Provider>
    );
}
