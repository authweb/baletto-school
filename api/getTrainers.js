// routes/trainers.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Маршрут для получения списка тренеров
router.get('/trainers', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM trainers');
        res.json({ trainers: rows });
    } catch (error) {
        console.error('Error fetching trainers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Маршрут для добавления тренера
router.post('/trainers', async (req, res) => {
    const { first_name, last_name, patronymic, bio, email, phone } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO trainers (first_name, last_name, patronymic, bio, email, phone) VALUES (?, ?, ?, ?, ?, ?)',
            [first_name, last_name, patronymic, bio, email, phone]
        );
        const newTrainer = {
            id: result.insertId,
            first_name,
            last_name,
            patronymic,
            bio,
            email,
            phone,
        };
        res.status(201).json({ trainer: newTrainer });
    } catch (error) {
        console.error('Error adding trainer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Маршрут для удаления тренера
router.delete('/trainers/:id', async (req, res) => {
    const trainerId = req.params.id;
    try {
        await db.execute('DELETE FROM trainers WHERE id = ?', [trainerId]);
        res.status(200).json({ message: 'Trainer deleted successfully' });
    } catch (error) {
        console.error('Error deleting trainer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
