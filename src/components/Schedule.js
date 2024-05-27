import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/schedule');
                setSchedule(response.data.schedule);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching schedule:', error);
                setError(error.message || 'An error occurred');
                setLoading(false);
            }
        };

        fetchSchedule();
    }, []);

    if (loading) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto p-4">Error: {error}</div>;
    }

    const daysOfWeek = Array.from(new Set(schedule.map(item => item.day_of_week)));

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Расписание занятий</h2>
            <table className="min-w-full bg-white border-separate border-spacing-2 border-slate-500 ">
                <tbody>
                    {daysOfWeek.map((day) => (
                        <React.Fragment key={day}>
                            <tr className="bg-teal-50 rounded-lg">
                                <td colSpan="5" className="py-2 px-4 text-center font-bold rounded-lg">{day}</td>
                            </tr>
                            <tr className='rounded-xl'>
                                <th className="py-2 px-4 bg-teal-100 rounded-lg">Тренер</th>
                                <th className="py-2 px-4 bg-teal-100 rounded-lg">Время</th>
                                <th className="py-2 px-4 bg-teal-100 rounded-lg">Группа</th>
                                <th className="py-2 px-4 bg-teal-100 rounded-lg">Направление</th>
                            </tr>
                            {schedule
                                .filter((item) => item.day_of_week === day)
                                .map((item, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2 rounded-lg">{item.trainer_name}</td>
                                        <td className="border px-4 py-2 rounded-lg">{item.time_start}</td>
                                        <td className="border px-4 py-2 rounded-lg">{item.student_group}</td>
                                        <td className="border px-4 py-2 rounded-lg">{item.direction}</td>
                                    </tr>

                                ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Schedule;
