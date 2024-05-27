const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');

// Маршрут для авторизации пользователя
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user) {
            console.log(`User with email ${email} not found`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log(`Invalid password for user with email ${email}`);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        console.log(`User ${email} logged in successfully`);
        res.json({ token, message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
