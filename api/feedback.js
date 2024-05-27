const express = require('express');
const router = express.Router();
const db = require('./db'); // Убедитесь, что путь к файлу db.js верный

// Маршрут для обработки формы обратной связи
router.post('/feedback', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const query = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [name, email, message]);
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/feedback', async (req, res) => {

    try {
        const [rows] = await db.execute('SELECT * FROM feedback');
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No feedback found' });
        }


        const feedback = rows;
        res.json({
            message: 'feedback fetched successfully',
            feedback: feedback.map((feed) => ({
                id: feed.id,
                name: feed.name,
                email: feed.email,
                message: feed.message,
                submitted_at: feed.submitted_at,
            })),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
