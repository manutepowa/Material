<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}


	//Recoje del post
	// $descripcion = $_POST['descripcion'];
	$descripcion = 'Camara Sony X10 Photo';

	$query = "INSERT INTO material(descripcion) VALUES('".$descripcion."')";
	$conexion->query($query)or die(mysql_error());

	header('Location: /Material/views/listar.php');

 ?>