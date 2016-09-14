<?php 

	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}

	$select = 'SELECT count(*) FROM prestamo';

	$row = $conexion->query($select)or die(mysql_error());

	$data = $row->fetch_array();
	$total = $data[0];

	if($total%12 == 0){
		$num_botones = round($total/12);
	}
	else{
		$num_botones = (round($total/12))+1;
	}

	echo '<div class="ui pagination menu">';
	echo '<a class="item"><i class="angle left icon"></i></a>';

	if($num_botones > 5){
		for ($i=1; $i <= 5; $i++) {
			if($i == 1)
				echo '<a class="active item">'.$i.'</a>';
			else
				echo '<a class="item">'.$i.'</a>';
		}
		echo '<div class="disabled item">...</div>';
		echo '<a class="item">'.($num_botones-1).'</a>';
		echo '<a class="item">'.($num_botones).'</a>';
	}
	else{
		for ($i=1; $i <= $num_botones; $i++) {
			if($i == 1)
				echo '<a class="active item">'.$i.'</a>';
			else
				echo '<a class="item">'.$i.'</a>';
		}
	}
		
	echo '<a class="item"><i class="angle right icon"></i></a>';
	echo "</div>";

?>

