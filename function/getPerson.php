<?php  

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$query = "SELECT * FROM material.persona";

	$row = $conexion->query($query)or die(mysql_error());
	var_dump($row->fetch_array());

?>