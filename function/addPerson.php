<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	//Recoje del post
	$nombre = $_POST['nombre'];
	// $nombre = 'Pepe Saez Perez';

	$query = "INSERT INTO persona(nombre) VALUES('".$nombre."')";
	$conexion->query($query)or die(mysql_error());

	header('Location: /Material/views/listar.php');

 ?>