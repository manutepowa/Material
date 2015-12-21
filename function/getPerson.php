<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

//BORRAR
	// $query = "UPDATE material.persona SET nombre = 'Alberto' WHERE id_persona = 2";
	// $conexion->query($query)or die(mysql_error());


	$query = "SELECT * FROM material.persona";
	// $p = array("nombre" => "Angel", "edad" => "23");
	$row = $conexion->query($query)or die(mysql_error());

	$jsonData = array();
	
	while($rows[] = $row->fetch_assoc());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>