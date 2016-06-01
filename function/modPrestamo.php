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

	$data_POST = array(0 => $per, 1 => $lug);
	$data_table = array(0 => 'persona', 1 => 'lugar');
	$data_field = array(0 => 'nombre', 1 => 'lugar');
	
	$data_id = array();

	$i = 0;
	$exists = 0;
	$delete = 0;
	$cnt_add = 0;
	$cnt_del = 0;
	$data_add_mat = array();
	$data_del_mat = array();

	for ($i=0; $i < 2; $i++) { 

		$select = 'SELECT id_'.$data_table[$i].' FROM '.$data_table[$i].' WHERE '.$data_field[$i].' = "'.$data_POST[$i].'"';
		$row = $conexion->query($select)or die(mysql_error());
		
		$info = $row->fetch_array();
		array_push($data_id, $info[0]);
	}

	$query = "UPDATE prestamo SET fecha_prestamo = '".$date."', id_lugar = ".$data_id[1].", id_persona = ".$data_id[0]." WHERE id_prestamo = ".$id;

	$conexion->query($query)or die(mysql_error());

	if(!$conexion) echo "2";
	
	$data_new_mat = array();

	foreach ($_POST['mat'] as $key => $value) { 
		$newvalue = str_replace('"', '\"', $value);
		// $newvalue = str_replace("'", "\'", $value);
		$select = 'SELECT id_material FROM material WHERE descripcion = "'.$newvalue.'"';
		
		$rows = $conexion->query($select)or die(mysql_error());

		$info = $rows->fetch_array();

		$data_new_mat[$key] = $info[0];
	}

	$data_old_mat = array();

	// Materiales del prestamo antes de modificar	
	$select = 'SELECT id_material FROM lineas_prestamo WHERE id_prestamo = '.$id.'';
	$rows = $conexion->query($select)or die(mysql_error());
	
	$i=0;

	while($info = $rows->fetch_array()){
		$data_old_mat[$i] = $info[0];
		$i++;
	}
	
	for($i=0;$i<count($data_new_mat);$i++){
		for($j=0;$j<count($data_old_mat);$j++){
			if($data_new_mat[$i]!=$data_old_mat[$j]){
				$exists++;
			}
		}
		if($exists==count($data_old_mat)){
			$data_add_mat[$cnt_add]=$data_new_mat[$i];
			$cnt_add++;
		}
		$exists = 0;
	}
	
	for($i=0;$i<count($data_old_mat);$i++){
		for($j=0;$j<count($data_new_mat);$j++){
			if($data_old_mat[$i]==$data_new_mat[$j]){
				$exists++;
			}
		}
		if($exists==0){
			$data_del_mat[$cnt_del]=$data_old_mat[$i];
			$cnt_del++;
		}
		$exists = 0;
	}
	
	foreach ($data_add_mat as $key => $value) {
		$insert = 'INSERT INTO lineas_prestamo VALUES ('.$id.','.$value.');';
		$conexion->query($insert)or die(mysql_error());
		if(!$conexion) echo "3";
	}

	foreach ($data_del_mat as $key => $value) {
		$delete = 'DELETE FROM lineas_prestamo WHERE id_prestamo = '.$id.' AND id_material = '.$value.';';
		$conexion->query($delete)or die(mysql_error());
		if(!$conexion) echo "4";
	}

	echo "1";
?>