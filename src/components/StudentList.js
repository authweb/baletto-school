import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Замените URL на ваш фактический URL API
        axios.get('http://localhost/baletto-school/api/')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the students!', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Список студентов</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {students.map((student, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">{student.first_name} {student.last_name}</h3>
                        <p>Email: {student.email}</p>
                        <p>Phone: {student.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentList;
