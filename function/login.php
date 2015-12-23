<?php 
  session_start();

  require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
  $conexion = connect();
  if ($conexion->connect_error) {
    die("Fallo al conectar: ".$conexion->connect_error);
    echo "Error";
  }

  // Usuario y contraseña para acceder
  $u = "oficina";
  $c = "c0mun1c4c10n";

  $usuario = $_POST["usuario"];
  $contrasena = $_POST["contrasena"];

  if ($usuario != $u || $contrasena != $c) {
    $_SESSION["errusu"]="NO";
    $_SESSION["errcon"]="NO";
    if ($usuario != $u) {
      $_SESSION["errusu"]="SI";
      echo "-1";
    }
    else {
      $_SESSION["errcon"]="SI";
      echo "-2";
    }
    // header('Location: /Material/index.php');

  }

  else {
    $_SESSION["autentificado"]="SI";
    echo "1";
  }

 ?>