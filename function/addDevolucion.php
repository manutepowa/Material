<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$id = $_POST['id-prest'];
	$date = $_POST['dat-dev'];
	$time = $_POST['time-dev'];

	$datetime = $date." ".$time.":00";

	$query = "UPDATE prestamo SET fecha_devolucion = '".$datetime."' WHERE id_prestamo = ".$id;

	$conexion->query($query)or die(mysql_error());

?>