<?php 
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/header.php');
 ?>


  <div class="cabecera">
    <div class="ui container">
        <img src="../site_map/images/logo.png" alt="logo">
        Materiales SC
        <a href="salir.php">Cerrar sesión</a>
    </div>
  </div>

<div class="ui container">


  <div class="ui search">
    <button class="ui teal button"><i class="add icon"></i>Préstamo</button>
    Filtrar por:
    <input class="prompt" type="text" placeholder="Material...">
    <input class="prompt" type="text" placeholder="Persona...">
    <input class="prompt" type="text" placeholder="Lugar...">
    <input class="prompt" type="text" placeholder="Fecha préstamo...">
    <input class="prompt" type="text" placeholder="Fecha devolución...">
    <div class="results"></div>
  </div>

    <table class="ui teal table">
      <thead>
        <tr>
          <th>MATERIAL</th>
          <th>PERSONA</th>
          <th>LUGAR</th>
          <th>F. PRÉSTAMO</th>
          <th>F. DEVOLUCIÓN</th>
          <th>ACCIÓN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>18/12/2015</td>
          <td>18/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>18/12/2015</td>
          <td>19/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>19/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>20/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr><tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>18/12/2015</td>
          <td>18/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>18/12/2015</td>
          <td>19/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>19/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>20/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr><tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>18/12/2015</td>
          <td>18/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>18/12/2015</td>
          <td>19/12/2015</td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Camara Sony X10 Photo</td>
          <td>Alberto García Guilló</td>
          <td>Elche</td>
          <td>19/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr>
        <tr>
          <td>Grabadora de mano Z6</td>
          <td>Ángel Fuentes Mirete</td>
          <td>Alicante</td>
          <td>20/12/2015</td>
          <td></td>
          <td>editar/borrar</td>
        </tr>
      </tbody>
    </table>

  </div>

<?php require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/footer.php'); ?>