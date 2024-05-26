<?php
header('Content-Type: application/json');

// Подключение к базе данных
include 'db.php';

// Выполнение запроса к базе данных
$sql = "SELECT * FROM students";
$result = $conn->query($sql);

// Обработка результатов и формирование JSON-ответа
$students = array();
while ($row = $result->fetch_assoc()) {
    $students[] = $row;
}

// Вывод JSON-ответа
echo json_encode($students);

// Закрытие соединения с базой данных
$conn->close();
