<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$persona = $_POST['per'];
	$lugar = $_POST['lug'];
	$date = $_POST['dat'];
	$time = $_POST['time'];
	$user = $_POST['user'];
	$obser = $_POST['obser'];
	$creac = $_POST['creac'];

	$datetime = $date." ".$time.":00";

	$data_POST = array(0 => $persona, 1 => $lugar);
	$data_table =  array(0 => 'persona', 1 => 'lugar');
	$data_field =  array(0 => 'nombre', 1 => 'lugar');

	$data_id = array();

	for ($i=0; $i < 2; $i++) { 

		$select = 'SELECT id_'.$data_table[$i].' FROM '.$data_table[$i].' WHERE '.$data_field[$i].' = "'.$data_POST[$i].'"';
		$row = $conexion->query($select)or die(mysql_error());

		$info = $row->fetch_array();
		
		array_push($data_id, $info[0]);
	}

	$insert = 'INSERT INTO prestamo(id_prestamo,id_persona,id_lugar,id_usuario,fecha_creacion,fecha_prestamo,observaciones,eliminado) VALUES(NULL,'.$data_id[0].','.$data_id[1].', '.$user.', "'.$creac.'", "'.$datetime.'", "'.$obser.'", 0)';
	// echo $insert;


	$conexion->query($insert)or die(mysql_error());

	if(!$conexion) echo "0";

	$ultimo_ID = $conexion->insert_id;

	$data_mat = array();

	foreach ($_POST['mat'] as $key => $value) { 
		$select = 'SELECT id_material FROM material WHERE descripcion = "'.$value.'"';
		$row = $conexion->query($select)or die(mysql_error());
		
		$info = $row->fetch_array();
		if(!$info) echo "2";
		
		array_push($data_mat, $info[0]);
	}

	foreach ($data_mat as $key => $value) {
		$insert = 'INSERT INTO lineas_prestamo VALUES ('.$ultimo_ID.','.$value.')';
		$conexion->query($insert)or die(mysql_error()); //error
		if(!$conexion) echo "3";
	}
	echo "1";
?>