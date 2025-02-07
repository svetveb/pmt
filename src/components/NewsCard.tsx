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
    onDelete?: () => void;
    onEdit?: (updates: { title: string; content: string }) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onDelete, onEdit }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.content.substring(0, 100)}...</p>
                <div className="text-sm text-gray-500 mb-4">
                    {new Date(news.created_at).toLocaleDateString()}
                </div>
                <div className="flex justify-between mt-4">
                    <Link to={`/news/${news.id}`} className="text-blue-500 hover:underline">
                        Читать далее
                    </Link>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onEdit?.({ title: news.title, content: news.content })}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Редактировать
                        </button>
                        <button
                            onClick={onDelete}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NewsCard;
