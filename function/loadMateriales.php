<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$query = "SELECT material.id_material, material.descripcion, prestamo.fecha_devolucion FROM material, prestamo, lineas_prestamo WHERE material.id_material = lineas_prestamo.id_material AND prestamo.id_prestamo = lineas_prestamo.id_prestamo AND prestamo.eliminado = 0 ORDER BY material.descripcion ASC;";

	$row = $conexion->query($query)or die(mysql_error());
	
	while($rows[] = $row->fetch_assoc());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>