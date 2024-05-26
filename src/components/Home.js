import React from 'react';
import StudentList from './StudentList';

function Home() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Welcome to Baletto School</h2>
            <p className="text-center mb-8">Discover the art of ballet with us. We offer classes for all ages and skill levels.</p>
            <StudentList />
        </div>
    );
}

export default Home;
