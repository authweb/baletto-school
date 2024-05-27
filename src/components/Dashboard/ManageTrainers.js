import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

const ManageTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newTrainer, setNewTrainer] = useState({
        first_name: '',
        last_name: '',
        patronymic: '',
        bio: ''
    });

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/trainers');
                setTrainers(response.data.trainers);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trainers:', error);
                setError(error.message || 'An error occurred');
                setLoading(false);
            }
        };

        fetchTrainers();
    }, []);

    const handleDeleteTrainer = async (trainerId) => {
        try {
            await axios.delete(`http://localhost:4000/api/trainers/${trainerId}`);
            setTrainers((prevTrainers) => prevTrainers.filter(trainer => trainer.id !== trainerId));
        } catch (error) {
            console.error('Error deleting trainer:', error);
            setError(error.message || 'An error occurred');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTrainer((prevNewTrainer) => ({
            ...prevNewTrainer,
            [name]: value
        }));
    };

    const handleAddTrainer = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/trainers', newTrainer);
            setTrainers((prevTrainers) => [...prevTrainers, response.data.trainer]);
            setNewTrainer({ first_name: '', last_name: '', patronymic: '', bio: '', email: '', phone: '' });
        } catch (error) {
            console.error('Error adding trainer:', error);
            setError(error.message || 'An error occurred');
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Панель управления тренерами</h2>
            <form onSubmit={handleAddTrainer} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Добавить тренера</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">Имя</label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="Имя"
                                value={newTrainer.first_name}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">Фамилия</label>
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Фамилия"
                                value={newTrainer.last_name}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patronymic">Отчество</label>
                            <input
                                type="text"
                                name="patronymic"
                                placeholder="Отчество"
                                value={newTrainer.patronymic}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">Биография</label>
                            <textarea
                                name="bio"
                                placeholder="Биография"
                                value={newTrainer.bio}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Почта</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="baletto@mail.ru"
                                value={newTrainer.email}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Телефон</label>
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                maskChar="_"
                                type="tel"
                                name="phone"
                                placeholder="+7 (999) 999-99-99"
                                value={newTrainer.phone}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                                Добавить
                            </button>
                        </div>
                    </div>

                </div>
            </form>
            <div className="grid md:grid-cols-2 gap-4">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="bg-white border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{trainer.last_name} {trainer.first_name} {trainer.patronymic}</h2>
                        <p className="text-gray-600 mb-2">{trainer.bio}</p>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                            onClick={() => handleDeleteTrainer(trainer.id)}
                        >
                            Удалить
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageTrainers;
