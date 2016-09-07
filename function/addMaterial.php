<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$descripcion = $_POST['descripcion'];

	$query = "SELECT * FROM material WHERE descripcion = '".$descripcion."'";
	$row = $conexion->query($query)or die(mysql_error());

	if($row->num_rows>0) echo "2";
	else{
		$query = "INSERT INTO material(descripcion) VALUES('".$descripcion."')";
		$conexion->query($query)or die(mysql_error());

		if($conexion) echo "1";
		else echo "0";
	}

	

 ?>