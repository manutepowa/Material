<?php 
	session_start();
	// require_once('config/config.php');
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}
 ?>

 <!DOCTYPE html>
 <html lang="es">
 <head>
 	<meta charset="UTF-8">
 	<title>Materiales SC</title>
 	<link rel="shortcut icon" href="../site_map/images/favicon.png">
 	<link rel="stylesheet" href="../site_map/Semantic-UI-CSS-master/semantic.min.css">
 	<link rel="stylesheet" href="../site_map/css/style.css">
 </head>
 <body>
 	
 	