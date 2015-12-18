<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$query = "SELECT nombre FROM material.persona";
	// $p = array("nombre" => "Angel", "edad" => "23");
	$row = $conexion->query($query)or die(mysql_error());

	$jsonData = array();
	// while($consulta = $row->fetch_assoc()) {
 //    	// array_push($jsonData, $consulta);
 //    	$jsonData[] = $consulta;
	// }
	// $rows = array();
	while($rows[] = $row->fetch_assoc());
	// $consulta = $row->fetch_array();
	// var_dump($rows);
	// array_push($jsonData, $consulta);
	// var_dump($jsonData);
	array_pop($rows);
	echo htmlspecialchars_decode(json_encode($rows));
	// echo '1';
	// var_dump($jsonEvent);
?>