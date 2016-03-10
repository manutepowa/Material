<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	//Recoje del post
	$lugar = $_POST['lugar'];
	// $lugar = 'Radio UMH';

	$query = "INSERT INTO lugar(lugar) VALUES('".$lugar."')";
	$conexion->query($query)or die(mysql_error());

	if($conexion) echo "1";
	else echo "0";

	// header('Location: /Material/views/listar.php');

 ?>