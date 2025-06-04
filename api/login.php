<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
session_start();
require_once 'conexion.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    
    $usuario = $_POST['usuario'] ?? '';
    $clave = $_POST['clave'] ?? '';

    if (empty($usuario) || empty($clave)) {
        echo json_encode(['success' => false, 'message' => 'Usuario y clave son requeridos']);
        exit;
    }

    $sql = "SELECT * FROM usuarios WHERE usuario = :usuario";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['usuario' => $usuario]);

    if ($stmt->rowCount() === 1) {
        $usuarioBD = $stmt->fetch(PDO::FETCH_ASSOC);
         
        // Usar password_verify para contraseñas hasheadas
        if ($clave ==$usuarioBD['clave']) {

            $_SESSION['idUsuario'] = $usuarioBD['idUsuario'];
            $_SESSION['nombre'] = $usuarioBD['nombre'];

            echo json_encode(['success' => true, 'message' => 'Login exitoso', 'nombre' => $usuarioBD['nombre']]);
            exit();
        } else {
            echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
            exit();
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Usuario no encontrado']);
        exit();
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Acceso no permitido']);
    exit();
}
?>