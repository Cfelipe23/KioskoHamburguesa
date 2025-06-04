<?php
$servidor = 'localhost';
$base_datos = 'database_tiendacomidas';
$usuario = 'root';
$clave = '';

try
{
    $pdo = new PDO("mysql:host=$servidor;dbname=$base_datos;charset=utf8", $usuario , $clave);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    error_log("Conexión exitosa") ;

}catch(PDOException $e){
    die("ERROR DE CONEXION: ".$e->getMessage());
}
?>