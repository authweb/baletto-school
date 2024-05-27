const express = require('express');
const router = express.Router();
const db = require('./db');
const path = require('path');

// Обслуживание статических файлов
router.use('/public/images', express.static(path.join(__dirname, 'public/images')));

router.get('/trainers', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM trainers');
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No trainers found' });
        }


        const trainers = rows;
        res.json({
            message: 'Trainers fetched successfully',
            trainers: trainers.map((trainer) => ({
                id: trainer.id,
                first_name: trainer.first_name,
                last_name: trainer.last_name,
                patronymic: trainer.patronymic,
                email: trainer.email,
                phone: trainer.phone,
                bio: trainer.bio,
                image_path: trainer.image_path,
                hire_date: trainer.hire_date,
                created_at: trainer.created_at,
            })),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;