<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$search = $_GET['q'];

	if($search == "all"){
		$query = "SELECT * FROM persona";
	}

	else{
		$query = "SELECT * FROM persona WHERE nombre LIKE '%".$search."%'";
	}

	$row = $conexion->query($query)or die(mysql_error());

	$jsonData = array();
	
	while($rows[] = $row->fetch_assoc());
	
	array_pop($rows);
	$jsonData = array('personas' => $rows);
	echo json_encode($jsonData);
	
?>