<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$query = "SELECT lugar.id_lugar, lugar.lugar, prestamo.fecha_devolucion FROM lugar, prestamo WHERE lugar.id_lugar = prestamo.id_lugar AND prestamo.eliminado = 0 ORDER BY lugar.lugar ASC;";

	$row = $conexion->query($query)or die(mysql_error());
	
	while($rows[] = $row->fetch_assoc());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>