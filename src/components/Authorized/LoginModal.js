import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, onRequestClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            onLoginSuccess(token);
            onRequestClose();
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Login Modal"
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
        >
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Вход</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Пароль</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="mb-4 text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    <div className="flex justify-between items-center">
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Войти</button>
                        <button onClick={onRequestClose} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Закрыть</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default LoginModal;
