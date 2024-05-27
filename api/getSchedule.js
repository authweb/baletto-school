const express = require('express');
const router = express.Router();
const db = require('./db'); // Путь к вашему файлу dbConnect может отличаться

router.get('/schedule', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM schedule');
        if (rows.length === 0) {
            return res.status(404).json({ message: 'No schedule found' });
        }

        const schedule = await Promise.all(rows.map(async (scheduler) => {
            // Запрос на получение имени тренера по его идентификатору
            const [trainerRow] = await db.execute('SELECT first_name, last_name FROM trainers WHERE id = ?', [scheduler.trainer_id]);
            const trainer = trainerRow[0]; // Первый элемент массива, так как ожидается только один результат

            // Возвращаем новый объект расписания с именем тренера
            return {
                id: scheduler.id,
                day_of_week: scheduler.day_of_week,
                trainer_id: scheduler.trainer_id,
                trainer_name: `${trainer.first_name} ${trainer.last_name}`,
                time_start: scheduler.time_start,
                student_group: scheduler.student_group,
                direction: scheduler.direction,
            };
        }));

        res.json({
            message: 'Schedule fetched successfully',
            schedule: schedule,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
