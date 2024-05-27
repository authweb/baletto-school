import React, { useState, useEffect } from 'react';
import axios from 'axios';
import trainersImage from "../assets/image/trainers.jpeg";
import train1 from '../assets/image/train1.jpeg';
import train2 from '../assets/image/train2.jpeg';
import train3 from '../assets/image/train3.jpeg';
import train4 from '../assets/image/train4.jpeg';
import train5 from '../assets/image/train5.jpeg';
import train6 from '../assets/image/train6.jpeg';
import train7 from '../assets/image/train7.jpeg';

const images = [train1, train2, train3, train4, train5, train6, train7];

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
            <div className="grid md:grid-сols-2 lg:grid-rows-3 gap-6 mt-12">
                {trainers.map((trainer, index) => (
                    <div key={trainer.id} id={`trainers_${trainer.id}`} className="border rounded-lg shadow-lg overflow-hidden">
                        <div className="flex ">
                            <img
                                src={images[index % images.length]}
                                alt={`${trainer.first_name} ${trainer.last_name}`}
                                className="w-1/2 h-100 object-cover flex-none"
                            />
                            <div className="w-1/2 flex flex-col justify-center mx-4">
                                <h2 className="text-4xl font-semibold mb-4">{trainer.last_name} {trainer.first_name} {trainer.patronymic}</h2>
                                <p className="text-gray-600 text-base">{trainer.bio.split('\n').map((str, idx) => <span key={idx}>{str}<br /></span>)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainerPage;
