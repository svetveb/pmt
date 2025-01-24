import React from 'react';

const Menu = ({ onNavigate }) => {
    return (
        <nav className="bg-gray-200 p-4 shadow-md">
            <ul className="flex space-x-4">
                <li>
                    <button className="text-blue-600 hover:underline" onClick={() => onNavigate('about')}>
                        О компании
                    </button>
                </li>
                <li>
                    <button className="text-blue-600 hover:underline" onClick={() => onNavigate('contact')}>
                        Контакты
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;

