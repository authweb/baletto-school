const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./db');

// Маршрут для регистрации пользователя
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Хеширование пароля
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
        await db.execute(query, [name, email, hashedPassword, 'user']);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
