import React, { useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Определяем константы для стилей
const MENU_STYLES = {
    container: "container mx-auto p-8",
    header: "flex justify-between items-center",
    logo: "text-2xl font-bold",
    menuToggle: "md:hidden cursor-pointer",
    menuIcon: {
        size: 24,
        color: "currentColor"
    },
    navList: "flex flex-col md:flex-row justify-center list-none",
    navItem: "mr-6 nav__item",
    navLink: ({ isActive }: { isActive: boolean }) => `
    inline-block px-4 py-2 text-lg font-normal no-underline rounded-md
    ${isActive
            ? 'text-gray-800 dark:text-gray-200'
            : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 hover:bg-indigo-100'
        }
    transition duration-300
  `.trim()
};

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={MENU_STYLES.container}>
            <div className={MENU_STYLES.header}>
                <div className={MENU_STYLES.logo}>Логотип</div>
                <div
                    className={MENU_STYLES.menuToggle}
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <FaTimes size={MENU_STYLES.menuIcon.size} />
                    ) : (
                        <FaBars size={MENU_STYLES.menuIcon.size} />
                    )}
                </div>
            </div>

            <ul
                className={`${MENU_STYLES.navList} ${isOpen ? 'block' : 'hidden md:flex'}`}
            >
                <li className={MENU_STYLES.navItem}>
                    <NavLink
                        to="/about"
                        className={MENU_STYLES.navLink}
                    >
                        О компании
                    </NavLink>
                </li>
                <li className={MENU_STYLES.navItem}>
                    <NavLink
                        to="/contact"
                        className={MENU_STYLES.navLink}
                    >
                        Контакты
                    </NavLink>
                </li>
                <li className={MENU_STYLES.navItem}>
                    <NavLink
                        to="/news"
                        className={MENU_STYLES.navLink}
                    >
                        Новости
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;