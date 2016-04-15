<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$id = $_GET['id-prest'];
	$date = $_GET['dat'];
	$per = $_GET['per'];
	$lug = $_GET['lug'];
	//$mat = $_POST['mat'];

	$data_POST = array(0 => $per, 1 => $lug);
	$data_table = array(0 => 'persona', 1 => 'lugar');
	$data_field = array(0 => 'nombre', 1 => 'lugar');

	$data_id = array();

	for ($i=0; $i < 2; $i++) { 

		$select = 'SELECT id_'.$data_table[$i].' FROM material.'.$data_table[$i].' WHERE '.$data_field[$i].' = "'.$data_POST[$i].'"';
		$row = $conexion->query($select)or die(mysql_error());
		
		$info = $row->fetch_array();
		echo "Tabla: ".$data_table[$i].", Campo: ".$data_field[$i]." ==> ".$info[0]."<br>";
		array_push($data_id, $info[0]);
		
	}

	echo "UPDATE material.prestamo SET fecha_prestamo = '".$date."', id_lugar = ".$data_id[1].", id_persona = ".$data_id[0]." WHERE id_prestamo = ".$id;
	$query = "UPDATE material.prestamo SET fecha_prestamo = '".$date."', id_lugar = ".$data_id[1].", id_persona = ".$data_id[0]." WHERE id_prestamo = ".$id;

	$conexion->query($query)or die(mysql_error());

	if(!$conexion) echo "2";
	else{
		echo "<br>Prestamo modificado correctamente<br>";
	}
	// Materiales del prestamo modificado 
	$data_new_mat = array();
	foreach ($_GET['mat'] as $key => $value) { 
		echo "material[".$key."]: ".$value." || id: ";
		$select = 'SELECT id_material FROM material.material WHERE descripcion = "'.$value.'"';
		//echo $select;
		$rows = $conexion->query($select)or die(mysql_error());

		$info = $rows->fetch_array();
		$data_new_mat[$key] = $info[0];
		//echo "$data_new_mat[".$key."]".$data_new_mat[$key]."<br>";
		echo "data_new_mat[".$key."]: ".$data_new_mat[$key]."<br>";
	}

	$data_old_mat = array();

	// Materiales del prestamo antes de modificar	
	$select = 'SELECT id_material FROM material.lineas_prestamo WHERE id_prestamo = '.$id.'';
	$rows = $conexion->query($select)or die(mysql_error());
	//$info = $rows->fetch_array();
	$i = 0;
	while($info = $rows->fetch_array()){
		//echo "id_prestamo: ".$info['id_prestamo'].", idmaterial: ".$info['id_material']."<br>";
		$data_old_mat[$i] = $info[0]; //id_material
		echo "data_old_mat[".$i."]: ".$data_old_mat[$i]."<br>";
		//echo $data_old_mat[$i]."<br>";
		$i++;
	}
	$exists = 0;
	$delete = 0;
	$cnt_add = 0;
	$cnt_del = 0;
	$data_add_mat = array();
	$data_del_mat = array();
	echo "id_material nuevos y que no estaban: ";
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
	for($i=0;$i<count($data_add_mat);$i++){
		echo $data_add_mat[$i]." ";
	}

	echo "<br>id_material que ya no estan y que hay que eliminar: ";
	
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

	for($i=0;$i<count($data_del_mat);$i++){
		echo $data_del_mat[$i]." ";
	}

	foreach ($data_add_mat as $key => $value) {
		$insert = 'INSERT INTO material.lineas_prestamo VALUES ('.$id.','.$value.');';
		echo "<br>".$insert;
		$conexion->query($insert)or die(mysql_error()); //error
		if(!$conexion) echo "3";
	}

	foreach ($data_del_mat as $key => $value) {
		$delete = 'DELETE FROM material.lineas_prestamo WHERE id_prestamo = '.$id.' AND id_material = '.$value.';';
		//$delete = 'INSERT INTO material.lineas_prestamo VALUES ('.$id.','.$value.');';
		echo "<br>".$delete;
		$conexion->query($delete)or die(mysql_error()); //error
		if(!$conexion) echo "4";
	}

	echo "1";

	//$total = count($info);
	
	// for($i=0;$i<$total;$i++){
	// 	echo $info[$i];
	// }

	// foreach ($rows as $row => $value) {
	// 	echo $value;
	// 	// $info = $row->fetch_array();
	// 	// if(!$info) echo "2";
		
	// 	// array_push($data_mat, $info[0]);
	// }
	

	// foreach ($_GET['mat'] as $key => $value) { 
	// 	//echo "material[".$key."]: ".$value."\n";
	// 	$select = 'SELECT id_material FROM material.material WHERE descripcion = "'.$value.'"';
	// 	$row = $conexion->query($select)or die(mysql_error());
		
	// 	$info = $row->fetch_array();
	// 	if(!$info) echo "2";
		
	// 	array_push($data_mat, $info[0]);
	// }

	// foreach ($data_mat as $key => $value) {
	// 	//echo "material[".$key."]: ".$value."\n";
	// 	$insert = 'INSERT INTO material.lineas_prestamo VALUES ('.$id.','.$value.')';
	// 	$conexion->query($insert)or die(mysql_error()); //error
	// 	if(!$conexion) echo "3";
	// }
	// echo "1";

?>