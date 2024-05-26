import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/image/logo.png';

function Header() {
    return (
        <header className="bg-white-800 p-4 text-gray">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className='w-1/6'><img src={logo} alt="Baletto School" /></Link>
                <nav>
                    <Link to="/" className="px-3 py-2 hover:bg-gray-200 rounded-lg">Главная</Link>
                    <Link to="/about" className="px-3 py-2 hover:bg-gray-200 rounded-lg">О нас</Link>
                    <Link to="/schedule" className="px-3 py-2 hover:bg-gray-200 rounded-lg">Расписание</Link>
                    <Link to="/contact" className="px-3 py-2 hover:bg-gray-200 rounded-lg">Контакты</Link>
                </nav>
            </div>
            <hr className='devider' />
        </header>
    );
}

export default Header;
