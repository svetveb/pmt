import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

interface NewsState {
    news: News[];
    loading: boolean;
    error: string | null;
}

type Action =
    | { type: 'FETCH_NEWS_REQUEST' }
    | { type: 'FETCH_NEWS_SUCCESS'; payload: News[] }
    | { type: 'FETCH_NEWS_FAILURE'; payload: string }
    | { type: 'ADD_NEWS'; payload: News }
    | { type: 'DELETE_NEWS'; payload: number }
    | { type: 'EDIT_NEWS'; payload: { id: number; updates: Partial<News> } }
    | { type: 'SET_NEWS'; payload: News[] };

const initialState: NewsState = {
    news: [],
    loading: true,
    error: null,
};

const newsReducer = (state: NewsState, action: Action): NewsState => {
    switch (action.type) {
        case 'FETCH_NEWS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_NEWS_SUCCESS':
            return { ...state, loading: false, news: action.payload };
        case 'FETCH_NEWS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_NEWS':
            return { ...state, news: [...state.news, action.payload] };
        case 'DELETE_NEWS':
            return { ...state, news: state.news.filter(item => item.id !== action.payload) };
        case 'EDIT_NEWS':

            return {
                ...state,
                news: state.news.map(item =>
                    item.id === action.payload.id ? { ...item, ...action.payload.updates } : item
                ),
            };
        default:
            return state;
    }
};

export const NewsContext = createContext<{
    state: NewsState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(newsReducer, initialState);

    useEffect(() => {
        const fetchNews = async () => {
            dispatch({ type: 'FETCH_NEWS_REQUEST' });
            try {
                const response = await axios.get<News[]>('./mockNews.json'); // Указание типа ответа
                dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data });
                localStorage.setItem('news', JSON.stringify(response.data));
            } catch (error) {
                dispatch({ type: 'FETCH_NEWS_FAILURE', payload: 'Ошибка при загрузке новостей' });
            }
        };

        const storedNews = localStorage.getItem('news');
        if (storedNews) {
            dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: JSON.parse(storedNews) });
        } else {
            fetchNews();
        }
    }, []);

    return (
        <NewsContext.Provider value={{ state, dispatch }}>
            {children}
        </NewsContext.Provider>
    );
};

