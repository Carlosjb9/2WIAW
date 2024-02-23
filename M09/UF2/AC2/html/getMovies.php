<?php
$servername = "db";
$username = "carlos";
$password = "test";
$database = "ajax";
$socket = "/var/run/mysqld/mysqld.sock";

$conn = new mysqli($servername, $username, $password, $database, null, $socket);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Especificar el conjunto de caracteres
$conn->set_charset("utf8mb4_unicode_ci");

$sql = "SELECT * FROM movies";
$result = $conn->query($sql);

if ($result) {
    $movies = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(["movies" => $movies]);
    $result->close();
} else {
    die("Error: " . $conn->error);
}

$conn->close();
?>
