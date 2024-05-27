import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import LoginModal from './Authorized/LoginModal';
import RegisterModal from './Authorized/RegisterModal';

function Header() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

    return (
        <header className="bg-white-800 text-gray font-semibold">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className='w-1/6'><img src={logo} alt="Baletto School" /></Link>
                <nav className="bg-teal-50 rounded-lg flex flex-row gap-6">
                    <Link to="/" className="px-6 py-2 no-underline hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Главная</Link>
                    <Link to="/about" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">О нас</Link>
                    <Link to="/trainers" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Преподаватели</Link>
                    <Link to="/schedule" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Расписание</Link>
                    <Link to="/contact" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Контакты</Link>
                </nav>
                <div className="flex gap-4">
                    <button onClick={() => setLoginModalOpen(true)} className="px-6 py-2 bg-teal-300 rounded-lg text-zinc-950 hover:bg-teal-200">Вход</button>
                    <button onClick={() => setRegisterModalOpen(true)} className="px-6 py-2 bg-teal-300 rounded-lg text-zinc-950 hover:bg-teal-200">Регистрация</button>
                </div>
            </div>
            <hr className='devider' />
            <LoginModal isOpen={isLoginModalOpen} onRequestClose={() => setLoginModalOpen(false)} />
            <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={() => setRegisterModalOpen(false)} />
        </header>
    );
}

export default Header;
