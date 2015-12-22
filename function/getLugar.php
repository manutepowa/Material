<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$search = $_GET['q'];

	$query = "SELECT * FROM material.lugar WHERE lugar LIKE '%".$search."%'";
	$row = $conexion->query($query)or die(mysql_error());

	$jsonData = array();
	
	while($rows[] = $row->fetch_all());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>