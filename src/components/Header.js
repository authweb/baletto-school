import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import { AuthContext } from '../contexts/AuthContext';

function Header({ onLoginClick, onRegisterClick, isAuthenticated, onLogout }) {
    const { user } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const buttonRef = useRef(null);

    const toggleDropdownMobile = () => {
        setIsDropdownOpenMobile(!isDropdownOpenMobile);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleOutsideClick = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            // Клик был выполнен вне кнопки, закрываем выпадающий список
            setIsDropdownOpenMobile(false);
            setIsDropdownOpen(false);
        }
    };
    // В useEffect добавляем слушатель событий для клика на всем документе
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        // Возвращаем функцию для удаления слушателя при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <header className="bg-white-800 text-gray font-semibold">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className='w-1/6'><img src={logo} alt="Baletto School" /></Link>
                <nav className="bg-teal-50 rounded-lg flex flex-row gap-6 hidden md:flex text-nowrap">
                    {isAuthenticated && (user.role === 'admin' || user.role === 'trainer') && (
                        <div className="relative" ref={buttonRef}>
                            <Link
                                onClick={toggleDropdown}
                                className="px-6 py-2 flex items-center gap-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg"
                            >
                                Панель управления
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.707 13.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg z-50">
                                    <Link to="/admin/trainers" className="block px-4 py-2 hover:bg-teal-300 rounded-t-lg">Управление тренерами</Link>
                                    <Link to="/admin/schedule" className="block px-4 py-2 hover:bg-teal-300">Управление расписанием</Link>
                                    <Link to="/admin/applications" className="block px-4 py-2 hover:bg-teal-300 rounded-b-lg">Просмотр заявок</Link>
                                </div>
                            )}
                        </div>
                    )}
                    <Link to="/" className="px-6 py-2 no-underline hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Главная</Link>
                    <Link to="/about" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">О нас</Link>
                    <Link to="/trainers" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Преподаватели</Link>
                    <Link to="/schedule" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Расписание</Link>
                    <Link to="/contact" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Контакты</Link>
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
                </nav>

                <div className="flex gap-4 md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none                        ">
                        {isMobileMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <nav className="bg-teal-50 rounded-lg flex flex-col gap-4 md:hidden">
                    {isAuthenticated && (user.role === 'admin' || user.role === 'trainer') && (
                        <div className="relative" ref={buttonRef}>
                            <Link
                                onClick={toggleDropdownMobile}
                                className="px-6 py-2 flex items-center gap-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg"
                            >
                                Панель управления
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ${isDropdownOpenMobile ? 'rotate-180' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.707 13.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            {isDropdownOpenMobile && (
                                <div className="absolute mt-2 mx-auto w-full flex flex-col bg-white border rounded-lg shadow-lg z-50">
                                    <Link to="/admin/trainers" className="py-2 px-6 hover:bg-teal-300">Управление тренерами</Link>
                                    <Link to="/admin/schedule" className="py-2 px-6 hover:bg-teal-300">Управление расписанием</Link>
                                    <Link to="/admin/applications" className="py-2 px-6 hover:bg-teal-300">Просмотр заявок</Link>
                                </div>
                            )}
                        </div>
                    )}
                    <Link to="/" className="px-6 py-2 no-underline hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Главная</Link>
                    <Link to="/about" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">О нас</Link>
                    <Link to="/trainers" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Преподаватели</Link>
                    <Link to="/schedule" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Расписание</Link>
                    <Link to="/contact" className="px-6 py-2 hover:transition-all hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg">Контакты</Link>
                    <div className="flex justify-center gap-4">
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
                </nav>
            )}
            <hr className='devider' />
        </header>
    );
}

export default Header;

