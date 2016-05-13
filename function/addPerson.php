<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$nombre = $_POST['nombre'];

	$query = "INSERT INTO persona(nombre) VALUES('".$nombre."')";
	$conexion->query($query)or die(mysql_error());

	if($conexion) echo "1";
	else echo "0";

 ?>