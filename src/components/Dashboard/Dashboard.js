import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManageTrainers from './ManageTrainers';
import ScheduleManagement from './ScheduleManagement';
import ViewApplications from './ViewApplications';

const AdminPanel = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">Панель управления</h2>
            <Routes>
                <Route path="trainers" element={<ManageTrainers />} />
                <Route path="schedule" element={<ScheduleManagement />} />
                <Route path="applications" element={<ViewApplications />} />
            </Routes>
        </div>
    );
};

export default AdminPanel;