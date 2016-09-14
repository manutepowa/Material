<?php 

	function connect(){
		require_once($_SERVER['DOCUMENT_ROOT'].'/Material/config/config.php');
		$mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		mysqli_set_charset($mysqli, 'utf8');
		return $mysqli;
	}
	
?>