<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'conexion.php';

// Validar método
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Obtener datos enviados por fetch (x-www-form-urlencoded)
    $nombre = $_POST['nombre'] ?? '';
    $apellido = $_POST['apellido'] ?? '';
    $usuario = $_POST['usuario'] ?? '';
    $clave = $_POST['clave'] ?? '';

    // Validar campos
    if (empty($nombre) || empty($apellido) || empty($usuario) || empty($clave)) {
        echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
        exit;
    }

    // Validar si ya existe el usuario
    $check = $pdo->prepare("SELECT idUsuario FROM usuarios WHERE usuario = :usuario");
    $check->execute(['usuario' => $usuario]);

    if ($check->rowCount() > 0) {
        echo json_encode(['success' => false, 'message' => 'El usuario ya existe']);
        exit;
    }

    // Insertar nuevo usuario (puedes usar password_hash si lo deseas)
    $sql = "INSERT INTO usuarios (nombre, apellido, usuario, clave) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute([$nombre, $apellido, $usuario, $clave]);

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Usuario registrado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al registrar usuario']);
    }

} else {
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido']);
}
?>