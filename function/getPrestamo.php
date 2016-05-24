<?php  
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$q = $_GET['q'];

	if ($q==0) {
		// $query = "SELECT prestamo.id_prestamo, material.descripcion, persona.nombre, lugar.lugar, prestamo.fecha_prestamo, prestamo.fecha_devolucion FROM material.prestamo, material.material, material.persona, material.lugar WHERE prestamo.id_material = material.id_material AND prestamo.id_persona = persona.id_persona AND prestamo.id_lugar = lugar.id_lugar ORDER BY prestamo.fecha_prestamo DESC;";
		$query = "SELECT prestamo.id_prestamo, material.descripcion, persona.nombre, lugar.lugar, prestamo.fecha_prestamo, prestamo.fecha_devolucion FROM prestamo, material, persona, lugar, lineas_prestamo WHERE prestamo.id_persona = persona.id_persona AND prestamo.id_lugar = lugar.id_lugar AND lineas_prestamo.id_material = material.id_material AND lineas_prestamo.id_prestamo = prestamo.id_prestamo AND prestamo.eliminado = 0 ORDER BY prestamo.fecha_prestamo DESC;";
	}
	else{
		// $query = "SELECT prestamo.id_prestamo, material.descripcion, persona.nombre, lugar.lugar, prestamo.fecha_prestamo, prestamo.fecha_devolucion FROM material.prestamo, material.material, material.persona, material.lugar WHERE prestamo.id_material = material.id_material AND prestamo.id_persona = persona.id_persona AND prestamo.id_lugar = lugar.id_lugar AND prestamo.fecha_devolucion IS NULL ORDER BY prestamo.fecha_prestamo DESC;";
		$query = "SELECT prestamo.id_prestamo, material.descripcion, persona.nombre, lugar.lugar, prestamo.fecha_prestamo, prestamo.fecha_devolucion FROM prestamo, material, persona, lugar, lineas_prestamo WHERE prestamo.id_persona = persona.id_persona AND prestamo.id_lugar = lugar.id_lugar AND lineas_prestamo.id_material = material.id_material AND lineas_prestamo.id_prestamo = prestamo.id_prestamo AND prestamo.fecha_devolucion IS NULL AND prestamo.eliminado = 0 ORDER BY prestamo.fecha_prestamo DESC;";
	}
	
	$row = $conexion->query($query)or die(mysql_error());
	
	while($rows[] = $row->fetch_assoc());
	
	array_pop($rows);
	echo json_encode($rows);
	
?>