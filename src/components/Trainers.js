import React, { useState, useEffect } from 'react';
import axios from 'axios';
import trainersImage from "../assets/image/trainers.jpeg";

const TrainerPage = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/trainers');
                if (Array.isArray(response.data.trainers)) {
                    setTrainers(response.data.trainers);
                } else {
                    setError('Data is not an array');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trainers:', error);
                setError(error.message || 'An error occurred');
                setLoading(false);
            }
        };

        fetchTrainers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container mx-auto p-4'>
            <div className="relative h-[400px]">
                <div
                    className="bs-overlay-image rounded-xl"
                    style={{
                        backgroundImage: `url(${trainersImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        position: 'relative'
                    }}
                >
                    <div className="bg-overlay absolute inset-0 bg-black opacity-60 rounded-xl"></div>
                    <div className="z-10 md:container mx-auto p-4 flex flex-col justify-center items-center relative">
                        <h1 className="text-7xl font-semibold mb-4 text-white">Преподаватели</h1>
                        <h3 className="text-xl text-white">Выбери своего профессионала</h3>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {trainers.map((trainer) => (
                    <div key={trainer.id} id={`trainers_${trainer.id}`} className="border rounded-lg p-4 shadow-md">
                        <img src={`http://localhost:4000/public/images/${trainer.image_path}`} alt={`${trainer.first_name} ${trainer.last_name}`} />
                        <h2 className="text-xl font-semibold mb-2">{trainer.last_name} {trainer.first_name} {trainer.patronymic}</h2>
                        <p className="text-gray-600 mb-2">{trainer.bio}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default TrainerPage;
