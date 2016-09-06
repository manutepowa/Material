<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$user = $_POST['usuario'];

	// echo $user;

	$query = "SELECT * FROM usuario WHERE nombre_usuario = '".$user."'";
	$conexion->query($query)or die(mysql_error());
// echo $query;
	// if($conexion) echo "1";
// echo $conexion->affected_rows;
	if($conexion->affected_rows==0) echo "0";
	else echo "1";
	
?>