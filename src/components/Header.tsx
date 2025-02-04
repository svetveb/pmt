import React from 'react';
import Menu from './Menu';

const Header: React.FC = () => {
    return (
        <header className="container w-full flex p-6 ">

            <Menu />
        </header>
    );
};

export default Header;
