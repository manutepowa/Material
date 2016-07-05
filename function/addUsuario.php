<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$usuario = $_POST['usuario'];
	$privilegios = $_POST['privilegios'];
	$contrasena = $_POST['contrasena'];

	$options = ['cost' => 12];

	$hash = password_hash($contrasena, PASSWORD_DEFAULT, $options);

	$query = "INSERT INTO usuario(nombre_usuario, contrasena, admin) VALUES('".$usuario."', '".$hash."', ".$privilegios.")";
	$conexion->query($query)or die(mysql_error());

	if($conexion) echo "1";
	else echo "0";

 ?>