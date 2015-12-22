<?php 

	//Comprobamos que el usuario se ha autentificado previamente
	if ($_SESSION["autentificado"] != "SI") {

		header("Location: ../index.php");

		exit();
	}

 ?>