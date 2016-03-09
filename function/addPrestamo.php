<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$persona = $_POST['per'];
	$material = $_POST['mat'];
	$lugar = $_POST['lug'];
	$date = $_POST['dat'];

	$data_POST = array(0 => $material, 1 => $persona, 2 => $lugar);
	$data_table =  array(0 => 'material', 1 => 'persona', 2 => 'lugar');
	$data_field =  array(0 => 'descripcion', 1 => 'nombre', 2 => 'lugar');

	$data_id = array();

	for ($i=0; $i < 3; $i++) { 

		$select = 'SELECT id_'.$data_table[$i].' FROM material.'.$data_table[$i].' WHERE '.$data_field[$i].' = "'.$data_POST[$i].'"';
		$row = $conexion->query($select)or die(mysql_error());

		if($row) echo "1";
		else echo "0";

		$info = $row->fetch_array();
		
		array_push($data_id, $info[0]);

	}


	$insert = 'INSERT INTO material.prestamo(id_material,id_persona,id_lugar,fecha_prestamo) VALUES('.$data_id[0].','.$data_id[1].', '.$data_id[2].', "'.$date.'")';
	$conexion->query($insert)or die(mysql_error());

	if($conexion) echo "1";
	else echo "0";

?>