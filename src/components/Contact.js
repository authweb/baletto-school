import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/feedback', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setResponseMessage('An error occurred while submitting feedback.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Обратная связь</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Имя</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">Комментарий</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Отправить
                    </button>
                </div>
                {responseMessage && (
                    <div className="mt-4 text-center text-teal-700">
                        <p>{responseMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Contact;
