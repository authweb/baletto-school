import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import { AuthContext } from '../contexts/AuthContext';

function Header({ onLoginClick, onRegisterClick, isAuthenticated, onLogout }) {
    const { user } = useContext(AuthContext);

    return (
        <header className="bg-white-800 text-gray font-semibold">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className='w-1/6'><img src={logo} alt="Baletto School" /></Link>
                <nav className="bg-teal-50 rounded-lg flex flex-row gap-6">
                    {isAuthenticated && (user.role === 'admin' || user.role === 'trainer') && (
                        <Link to="/admin" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Панель управления</Link>
                    )}
                    <Link to="/" className="px-6 py-2 no-underline hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Главная</Link>
                    <Link to="/about" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">О нас</Link>
                    <Link to="/trainers" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Преподаватели</Link>
                    <Link to="/schedule" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Расписание</Link>
                    <Link to="/contact" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Контакты</Link>

                </nav>
                <div className="flex gap-4">
                    {isAuthenticated ? (
                        <>
                            <button
                                onClick={onLogout}
                                className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg"
                            >
                                Выход
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={onLoginClick}
                                className="px-6 py-2 bg-teal-300 rounded-lg text-zinc-950 hover:bg-teal-200"
                            >
                                Войти
                            </button>
                            <button
                                onClick={onRegisterClick}
                                className="px-6 py-2 bg-teal-300 rounded-lg text-zinc-950 hover:bg-teal-200"
                            >
                                Регистрация
                            </button>
                        </>
                    )}
                </div>
            </div>
            <hr className='devider' />
        </header>
    );
}

export default Header;
