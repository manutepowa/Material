<?php 
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/header.php');
 ?>


  <div class="cabecera">
    <div class="ui container">
        <img src="../site_map/images/logo.png" alt="logo">
        Materiales SC
        <a href="../function/salir.php">Cerrar sesión</a>
    </div>
  </div>

<div class="ui container">


  <!-- <div class="ui search">
    <button class="ui teal button"><i class="add icon"></i>Préstamo</button>
    Filtrar por:
    <input class="prompt" type="text" placeholder="Material...">
    <input class="prompt" type="text" placeholder="Persona...">
    <input class="prompt" type="text" placeholder="Lugar...">
    <input class="prompt" type="text" placeholder="Fecha préstamo...">
    <input class="prompt" type="text" placeholder="Fecha devolución...">
    <div class="results"></div>
  </div> -->
  <div class="filtros">
    <div class="nprestamo">
      <button class="ui teal button"><i class="add icon"></i>Préstamo</button>
      <span>Filtrar por:</span>
    </div>
    <div class="filtro">
      <input class="prompt" type="text" placeholder="Material...">
      <!-- <div class="results"></div> -->
    </div>
    <div class="filtro">
      <input class="prompt" type="text" placeholder="Persona...">
      <!-- <div class="results"></div> -->
    </div>
    <div class="filtro">
      <input class="prompt" type="text" placeholder="Lugar...">
      <!-- <div class="results"></div> -->
    </div>
    <div class="filtro">
      <input class="prompt" type="text" placeholder="Fecha préstamo...">
      <!-- <div class="results"></div> -->
    </div>
    <div class="filtro">
      <input class="prompt" type="text" placeholder="Fecha devolución...">
      <!-- <div class="results"></div> -->
    </div>
  </div>
  <!-- <div class="results"></div> -->
  <!-- </div> -->

    <table id="prestamos" class="ui teal table">
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
      <!-- http://bootsnipp.com/snippets/featured/panel-table-with-filters-per-column -->
      </tbody>
    </table>

  </div>

<?php require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/footer.php'); ?>