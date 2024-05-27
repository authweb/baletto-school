const express = require('express');
const router = express.Router();
const db = require('./db'); // Путь к вашему файлу dbConnect может отличаться

// Получение расписания
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

// Обновление расписания
router.post('/schedule/:id', async (req, res) => {
    const id = req.params.id;
    const { dayOfWeek, trainerId, timeStart, studentGroup, direction } = req.body;
    try {
        // Выполнить запрос на изменение расписания в базе данных
        const updateResult = await db.execute(
            'UPDATE schedule SET day_of_week = ?, trainer_id = ?, time_start = ?, student_group = ?, direction = ? WHERE id = ?',
            [dayOfWeek, trainerId, timeStart, studentGroup, direction, id]
        );

        // Проверить, было ли обновление успешным
        if (updateResult.affectedRows === 0) {
            return res.status(404).json({ message: 'Schedule not found or not updated' });
        }

        res.json({ message: 'Schedule updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/schedule/:id', async (req, res) => {
    const scheduleId = req.params.id;
    try {
        await db.execute('DELETE FROM schedule WHERE id = ?', [scheduleId]);
        res.status(200).json({ message: 'schedule deleted successfully' });
    } catch (error) {
        console.error('Error deleting schedule:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Добавление нового расписания
router.post('/schedule', async (req, res) => {
    const { day_of_week, trainer_id, time_start, student_group, direction } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO schedule (day_of_week, trainer_id, time_start, student_group, direction) VALUES (?, ?, ?, ?, ?)',
            [day_of_week, trainer_id, time_start, student_group, direction]
        );
        const newSchedule = {
            id: result.insertId,
            day_of_week,
            trainer_id,
            time_start,
            student_group,
            direction
        };
        res.status(201).json({ schedule: newSchedule });
    } catch (error) {
        console.error('Error adding schedule:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
