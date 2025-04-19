<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Método no permitido (usa POST)."
    ]);
    exit;
}

// Aquí va el resto de tu código, como la validación de los datos.
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Validación simple
if (empty($email) || empty($password)) {
    echo json_encode([
        "status" => "error",
        "message" => "Email y contraseña son obligatorios."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Formato de email no válido."
    ]);
    exit;
}

if (strlen($password) < 6) {
    echo json_encode([
        "status" => "error",
        "message" => "La contraseña debe tener al menos 6 caracteres."
    ]);
    exit;
}

// Si todo está ok
echo json_encode([
    "status" => "ok",
    "message" => "Datos recibidos correctamente."
]);
?>
