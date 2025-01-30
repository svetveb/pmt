import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext, NewsContextType } from '../context/NewsContext';


function NewsList() {
    // @ts-ignorets
    const { news, currentNews } = useContext(NewsContext);

    if (!news.length) return <div>Новостей пока нет</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Список новостей</h1>
            {news.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; date: string | number | Date; content: string | any[]; }) => (
                <div
                    key={item.id}
                    className="mb-4 p-2 bg-white rounded shadow hover:bg-gray-100 transition duration-300"
                >
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600 mb-2">Дата: {new Date(item.date).toLocaleDateString()}</p>
                    <p className="text-gray-500 mb-2">{item.content.slice(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/news/${item.id}`} className="text-blue-500 hover:underline">Читать далее</Link>
                        {currentNews?.id === item.id && (
                            <>
                                <button
                                    onClick={() => console.log('Редактировать')}
                                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                    disabled={currentNews?.status !== 'Опубликовано'}
                                >
                                    Редактировать
                                </button>
                                <button
                                    onClick={() => console.log('Удалить')}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    disabled={currentNews?.status !== 'Черновик'}
                                >
                                    Удалить
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsList;
