import React, { useEffect, useState } from 'react';

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('localhost/api/students')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStudents(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Our Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id} className="mb-2">
                        {student.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
