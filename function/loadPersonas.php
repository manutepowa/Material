<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$query = "SELECT persona.id_persona, persona.nombre, prestamo.fecha_devolucion FROM material.persona, material.prestamo WHERE persona.id_persona = prestamo.id_persona AND prestamo.eliminado = 0 ORDER BY persona.nombre ASC;";

	//$query = "SELECT DISTINCT persona.id_persona, persona.nombre FROM material.persona, material.prestamo WHERE persona.id_persona = prestamo.id_persona AND prestamo.eliminado = 0 ORDER BY persona.nombre ASC;";
	
	$row = $conexion->query($query)or die(mysql_error());
	
	while($rows[] = $row->fetch_all());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>