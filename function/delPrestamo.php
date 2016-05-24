<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$id = $_POST['id-prest'];

	// En un futuro, para los admin, sí eliminarán definitivamente de la BBDD los prestamos
	// $query = "DELETE FROM material.prestamo WHERE id_prestamo = ".$id;

	// En lugar de eliminarlo, le pondrán el campo 'eliminado' a 1
	$query = "update prestamo set prestamo.eliminado = 1 where prestamo.id_prestamo = ".$id;

	$conexion->query($query)or die(mysql_error());


?>