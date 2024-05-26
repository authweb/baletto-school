import React from 'react';

function Schedule() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Расписание занятий</h2>
            <p className="mb-4">Вот наше расписание занятий:</p>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200">День</th>
                        <th className="py-2 px-4 bg-gray-200">Время</th>
                        <th className="py-2 px-4 bg-gray-200">Класс</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Monday</td>
                        <td className="border px-4 py-2">10:00 - 11:00</td>
                        <td className="border px-4 py-2">Beginner Ballet</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default Schedule;
