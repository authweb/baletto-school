<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM students";
        $result = $conn->query($sql);
        $students = array();
        while ($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
        echo json_encode($students);
        break;
        // Реализуйте другие методы (POST, PUT, DELETE) при необходимости
}

$conn->close();
