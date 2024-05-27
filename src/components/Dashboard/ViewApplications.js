import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewApplications = () => {
    const [feedback, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/feedback');
                setFeedbacks(response.data.feedback);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching feedback:', error);
                setError('Error fetching feedback');
            }
        };

        fetchApplications();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Просмотр заявок</h2>
            {feedback.length === 0 ? (
                <p>Нет заявок для отображения.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">Имя</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Сообщение</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map((feed, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="border px-4 py-2">{feed.name}</td>
                                    <td className="border px-4 py-2">{feed.email}</td>
                                    <td className="border px-4 py-2">{feed.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

    );
};

export default ViewApplications;
