import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
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
            setNewTrainer({ first_name: '', last_name: '', patronymic: '', bio: '' });
        } catch (error) {
            console.error('Error adding trainer:', error);
            setError(error.message || 'An error occurred');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Панель управления</h2>
            <form onSubmit={handleAddTrainer} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Добавить тренера</h3>
                <input
                    type="text"
                    name="first_name"
                    placeholder="Имя"
                    value={newTrainer.first_name}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Фамилия"
                    value={newTrainer.last_name}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    name="patronymic"
                    placeholder="Отчество"
                    value={newTrainer.patronymic}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <textarea
                    name="bio"
                    placeholder="Биография"
                    value={newTrainer.bio}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                ></textarea>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Добавить
                </button>
            </form>
            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{trainer.last_name} {trainer.first_name} {trainer.patronymic}</h2>
                        <p className="text-gray-600 mb-2">{trainer.bio}</p>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
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

export default AdminPanel;
