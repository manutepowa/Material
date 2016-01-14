<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$id = $_POST['id-prest'];
	$date = $_POST['dat'];
	$per = $_POST['per'];
	$lug = $_POST['lug'];
	$mat = $_POST['mat'];

	$data_POST = array(0 => $mat, 1 => $per, 2 => $lug);
	$data_table =  array(0 => 'material', 1 => 'persona', 2 => 'lugar');
	$data_field =  array(0 => 'descripcion', 1 => 'nombre', 2 => 'lugar');

	$data_id = array();

	for ($i=0; $i < 3; $i++) { 

		$select = 'SELECT id_'.$data_table[$i].' FROM material.'.$data_table[$i].' WHERE '.$data_field[$i].' = "'.$data_POST[$i].'"';
		$row = $conexion->query($select)or die(mysql_error());
		$info = $row->fetch_array();
		
		array_push($data_id, $info[0]);

	}

	$query = "UPDATE material.prestamo SET fecha_prestamo = '".$date."', id_lugar = ".$data_id[2].", id_persona = ".$data_id[1].", id_material = ".$data_id[0]." WHERE id_prestamo = ".$id;

	$conexion->query($query)or die(mysql_error());



?>