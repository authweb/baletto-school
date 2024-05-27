import React from 'react';
import { Link } from 'react-router-dom';
import BannerSlider from './Slider';

function Home() {
    return (
        <div className="container mx-auto p-4 flex flex-col gap-12">
            <BannerSlider />
            <div className="us-numbers flex items-center flex-col gap-12 text-center">
                <h1 className="text-5xl font-semibold mb-4">Мы в цифрах</h1>
                <div className="us-numbers__block flex justify-between gap-6">
                    <div className="us-numbers__advantages w-1/3 flex flex-col items-center gap-3">
                        <h1 className="text-6xl font-semibold mb-4">
                            500 +
                        </h1>
                        <h3 className='text-lg '>Довольных клиентов</h3>
                        <h3 className='text-lg'>Каждому помогаем овладеть искусству балетного танца</h3>
                    </div>
                    <div className="us-numbers__advantages w-1/3 flex flex-col items-center gap-3">
                        <h1 className="text-6xl font-semibold mb-4">
                            7
                        </h1>
                        <h3 className='text-lg'>Талантливых преподавателей</h3>
                        <h3 className='text-lg'>Самые крутые профессионалы</h3>
                    </div>
                    <div className="us-numbers__advantages w-1/3 flex flex-col items-center gap-3">
                        <h1 className="text-6xl font-semibold mb-4">
                            25
                        </h1>
                        <h3 className='text-lg'>Выступлений</h3>
                        <h3 className='text-lg'>Выступаем по России уже 3 года</h3>
                    </div>
                </div>
                <button><Link to="/trainers" className="px-5 py-4 bg-slate-100 hover:bg-gray-200 hover:transition-all rounded-lg">Преподаватели</Link></button>
            </div>

            {/* <StudentList /> */}
        </div>
    );
}

export default Home;
