import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Определяет типы для пропсов
interface MenuProps {
    setPage: (page: string) => void; // Функция, которая принимает строку
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {
    const location = useLocation();

    useEffect(() => {
        setPage(location.pathname === '/about' ? 'about' : 'contact');
    }, [location.pathname, setPage]);

    return (
        <nav className="bg-gray-200 p-4 shadow-md">
            <ul className="flex space-x-4">
                <li>
                    <Link
                        to="/about"
                        className="hover:text-gray-400"
                        onClick={() => setPage('about')}
                    >
                        О компании
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="hover:text-gray-400"
                        onClick={() => setPage('contact')}
                    >
                        Контакты
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
