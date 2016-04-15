<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$search = $_GET['q'];

	$query = "SELECT material.id_material, material.descripcion FROM material.material, material.lineas_prestamo WHERE material.id_material = lineas_prestamo.id_material AND lineas_prestamo.id_prestamo = ".$search."";
	$row = $conexion->query($query)or die(mysql_error());
	
	while($rows[] = $row->fetch_all());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>