<?php 
	/*
		EJEMPLO DE CONSULTA CON MYSQLI
		
	 
	<div class="container text-cent">
		<?php 
			include ('functions/connect_mysqli.php'); 
			$conexion = connect();
			$resultado = $conexion->query("SELECT * FROM cajeros AS caj");
			
			while ($dato = $resultado->fetch_array()) {
			      echo $dato[2]." ".$dato[3]." ".$dato[1]."<br>";
			   }
			$conexion->close();
		?>
	</div>
	*/
	function connect(){
		require_once($_SERVER['DOCUMENT_ROOT'].'/Material/config/config.php');
		$mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		return $mysqli;
	}
?>