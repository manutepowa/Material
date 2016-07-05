<?php 
  session_start();

  require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
  $conexion = connect();
  if ($conexion->connect_error) {
    die("Fallo al conectar: ".$conexion->connect_error);
    echo "Error";
  }


  // $pass = 'manu1234';
 
  // $options = ['cost' => 12];
 
  // // Save this as password
  // $hash = password_hash($pass, PASSWORD_DEFAULT, $options);
 
  // echo "Your Password hash: ".$hash;
  // echo "<br />";

  $usuario = "sads";
  $contrasena = "ad";
  // $contrasena = "$2y$12$vL.iGaB4px1VCLZvsCUdIem.GGpGkvBy3hu2Pgct66Ty3zqQxH3j2";

  $query = "SELECT nombre_usuario, contrasena FROM usuario WHERE nombre_usuario = '".$usuario."'";
  $row = $conexion->query($query)or die(mysql_error());
  while($rows[] = $row->fetch_assoc());
// var_dump($rows);
// echo $rows[0]['contrasena'];
  if($row->num_rows == 0){
    echo "-1";
  }
  else{
    // $options = ['cost' => 12];
    // $hash = password_hash($contrasena, PASSWORD_DEFAULT, $options);
    if(password_verify($contrasena, $rows[0]['contrasena'])){
      echo "1";
    }
    else{
      echo "-2";
    }
  }


 ?>