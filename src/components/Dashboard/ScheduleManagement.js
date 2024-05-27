import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleManagement = () => {
    const [schedule, setSchedule] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        day_of_week: '',
        trainer_id: '',
        time_start: '',
        student_group: '',
        direction: ''
    });
    const [selectedScheduleId, setSelectedScheduleId] = useState(null); // Добавлено новое состояние

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const scheduleResponse = await axios.get('http://localhost:4000/api/schedule');
                setSchedule(scheduleResponse.data.schedule);

                const trainersResponse = await axios.get('http://localhost:4000/api/trainers');
                setTrainers(trainersResponse.data.trainers);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSchedule();
    }, []);

    const handleDeleteSchedule = async (scheduleId) => {
        try {
            await axios.delete(`http://localhost:4000/api/schedule/${scheduleId}`);
            setSchedule((prevSchedule) => prevSchedule.filter(schedule => schedule.id !== scheduleId));
        } catch (error) {
            console.error('Error deleting trainer:', error);
            setError(error.message || 'An error occurred');
        }
    };

    const handleEditSchedule = (scheduleId) => {
        const selectedSchedule = schedule.find(item => item.id === scheduleId);
        setFormData(selectedSchedule);
        setSelectedScheduleId(scheduleId);
        openModal();
    };

    const handleAddScheduleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/schedule', formData);
            const newSchedule = response.data.schedule;
            setSchedule([...schedule, newSchedule]); // Обновляем состояние schedule, добавляя новое расписание
            closeModal();
        } catch (error) {
            console.error('Error adding schedule:', error);
        }
    };

    const handleEditScheduleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:4000/api/schedule/${selectedScheduleId}`, formData);
            const updatedSchedule = { ...formData, id: selectedScheduleId };
            setSchedule(prevSchedule => prevSchedule.map(item => (item.id === selectedScheduleId ? updatedSchedule : item))); // Обновляем состояние schedule, заменяя отредактированное расписание
            closeModal();
        } catch (error) {
            console.error('Error editing schedule:', error);
        }
    };


    const openModal = () => {
        setSelectedScheduleId(null); // Сбрасываем ID выбранного расписания
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedScheduleId(null); // Сбрасываем ID выбранного расписания
        // Сбросить форму после закрытия модального окна
        setFormData({
            day_of_week: '',
            trainer_id: '',
            time_start: '',
            student_group: '',
            direction: ''
        });
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Изменение расписания</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {schedule.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{item.day_of_week}</h3>
                        <p>Время начала: {item.time_start}</p>
                        <p>Группа: {item.student_group}</p>
                        <p>Направление: {item.direction}</p>
                        <p>Тренер: {item.trainer_name}</p>
                        <div className="grid grid-rows font-semibold">
                            <button
                                onClick={() => handleEditSchedule(item.id)}
                                className="mt-2 px-6 py-2 hover:transition-all bg-teal-200 hover:bg-teal-300 active:bg-teal-300 active:text-white focus:text-white focus:bg-teal-300 hover:text-white rounded-lg"
                            >
                                Редактировать
                            </button>
                            <button
                                onClick={() => handleDeleteSchedule(item.id)}
                                className="mt-2 px-4 py-2 bg-red-500 hover:transition-all hover:bg-red-700 text-white rounded-lg"
                            >
                                Удалить
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            <button
                onClick={openModal}
                className="mt-8 px-4 py-2 bg-teal-300 rounded-lg text-zinc-950 hover:bg-teal-200 font-semibold text-nowrap w-full md:w-auto"
            >
                Добавить расписание
            </button>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">
                            {selectedScheduleId ? 'Редактирование расписания' : 'Добавление расписания'}
                        </h2>
                        <form onSubmit={selectedScheduleId ? handleEditScheduleSubmit : handleAddScheduleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="dayOfWeek" className="block text-sm font-semibold">День недели:</label>
                                <input
                                    type="text"
                                    id="dayOfWeek"
                                    value={formData.day_of_week}
                                    onChange={(e) => setFormData({ ...formData, day_of_week: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="trainer" className="block text-sm font-semibold">Тренер:</label>
                                <select
                                    id="trainer"
                                    value={formData.trainer_id}
                                    onChange={(e) => setFormData({ ...formData, trainer_id: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                                    required
                                >
                                    <option value="">Выберите тренера</option>
                                    {trainers.map(trainer => (
                                        <option key={trainer.id} value={trainer.id}>{trainer.first_name} {trainer.last_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="timeStart" className="block text-sm font-semibold">Время начала:</label>
                                <input
                                    type="text"
                                    id="timeStart"
                                    value={formData.time_start}
                                    onChange={(e) => setFormData({ ...formData, time_start: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="studentGroup" className="block text-sm font-semibold">Группа:</label>
                                <input
                                    type="text"
                                    id="studentGroup"
                                    value={formData.student_group}
                                    onChange={(e) => setFormData({ ...formData, student_group: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="direction" className="block text-sm font-semibold">Направление:</label>
                                <input
                                    type="text"
                                    id="direction"
                                    value={formData.direction}
                                    onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-lg">Отмена</button>
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">
                                    {selectedScheduleId ? 'Сохранить изменения' : 'Добавить'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleManagement;
