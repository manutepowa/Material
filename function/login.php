<?php 
  session_start();

  require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
  $conexion = connect();
  if ($conexion->connect_error) {
    die("Fallo al conectar: ".$conexion->connect_error);
    echo "Error";
  }

  $usuario = $_POST["usuario"];
  $contrasena = $_POST["contrasena"];

  $query = "SELECT id_usuario, nombre_usuario, contrasena, admin FROM usuario WHERE nombre_usuario = '".$usuario."'";
  $row = $conexion->query($query)or die(mysql_error());
  
  while($rows[] = $row->fetch_assoc());

  if($row->num_rows == 0){
    echo "-1";
  }
  else{
    if(password_verify($contrasena, $rows[0]['contrasena'])){
      $_SESSION["autentificado"]="SI";
      if($rows[0]['admin'] == 1){
        $_SESSION["admin"]="SI";
      }
      else{
        $_SESSION["admin"]="NO";
      }
      $_SESSION["id_user"]=$rows[0]['id_usuario'];
      $_SESSION["user"]=$rows[0]['nombre_usuario'];
      echo "1";
    }
    else{
      echo "-2";
    }
  }

 ?>