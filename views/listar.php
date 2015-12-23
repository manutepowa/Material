<?php 
	require_once('header.php');
 ?>

<div class="ui small modal btnAddUser">
  <i class="close icon"></i>
  <div class="header">
    Añadir Persona
  </div>
  <div class="paddingContent ui grid centered">
    <div class="five wide column">
      <div class="image content">
        <div class="ui centered image">
          <img class="center" src="../site_map/images/addUser.png" height="128" width="128">
        </div>
      </div>
    </div>
    <div class="seven wide column">
      <form class="ui form" action="../function/addPerson.php" method="POST">
          <div class="field">
            <label>Nombre y apellidos</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre y apellidos">
          </div>
          <div class="ui rightAlign">
            <button class="ourColor ui right aligned button" type="submit">Añadir</button>
          </div>
      </form>
    </div>
  </div>
</div>


<div class="ui small modal btnAddMaterial">
  <i class="close icon"></i>
  <div class="header">
    Añadir Material
  </div>
  <div class="paddingContent ui grid centered">
    <div class="five wide column">
      <div class="image content">
        <div class="ui centered image">
          <img class="center" src="../site_map/images/LogoColor.png" height="128" width="128">
        </div>
      </div>
    </div>
    <div class="seven wide column">
      <form class="ui form" action="../function/addMaterial.php" method="POST">
          <div class="field">
            <label>Nombre</label>
            <input type="text" name="descripcion" id="descripcion" placeholder="Nombre y apellidos">
          </div>
          <div class="ui rightAlign">
            <button class="ourColor ui right aligned button" type="submit">Añadir</button>
          </div>
      </form>
    </div>
  </div>
</div>

<div class="ui small modal btnAddLugar">
  <i class="close icon"></i>
  <div class="header">
    Añadir Lugar
  </div>
  <div class="paddingContent ui grid centered">
    <div class="five wide column">
      <div class="image content">
        <div class="ui centered image">
          <img class="center" src="../site_map/images/location.png" height="128" width="128">
        </div>
      </div>
    </div>
    <div class="seven wide column">
      <form class="ui form" action="../function/addLugar.php" method="POST">
          <div class="field">
            <label>Lugar</label>
            <input type="text" name="lugar" id="lugar" placeholder="Nombre y apellidos">
          </div>
          <div class="ui rightAlign">
            <button class="ourColor ui right aligned button" type="submit">Añadir</button>
          </div>
      </form>
    </div>
  </div>
</div>


<div class="ui small modal">
  <div class="header">
    Añadir Préstamo
  </div>
  <div class="content">
    
    <div class="description">
      <div class="ui relaxed divided list">
		  <div class="item">
			<div class="ui search medium" id="per">
			  <div class="ui icon input">
			    <input id="persona" class="prompt" type="text" placeholder="Buscar Persona...">
			    <i class="search icon"></i>
			  </div>
			  <div class="results"></div>
			</div>
		    <i class="large user big aligned icon"></i>
		    <div class="content">
		      <div class="description">No hay usuario añadido</div>
		    </div>
		  </div>

		  <div class="item">
		  	<div class="ui search medium" id="mat">
			  <div class="ui icon input">
			    <input id="material" class="prompt" type="text" placeholder="Buscar Material...">
			    <i class="search icon"></i>
			  </div>
			  <div class="results"></div>
			</div>
		    <i class="large archive big aligned icon"></i>
		    <div class="content">
		      <div class="description">no hay material añadido</div>
		    </div>
		  </div>

		  <div class="item">
			<div class="ui search medium" id="lug">
			  <div class="ui icon input">
			    <input id="lugar" class="prompt" type="text" placeholder="Buscar Lugar...">
			    <i class="search icon"></i>
			  </div>
			  <div class="results"></div>
			</div>
		    <i class="large world big aligned icon"></i>
		    <div class="content">
		      <div class="description">No hay lugar añadido</div>
		    </div>
		  </div>

		  <div class="item">
		  	<div class="ui search medium" id="dat">
			  	<div class="ui left icon input">
				  <input type="date" placeholder="Fecha" id="date">
				  <i class="calendar icon"></i>
				</div>
			</div>
		    <i class="large calendar big aligned icon"></i>
		    <div class="content">
		      <div class="description">No hay hecha añadida</div>
		    </div>
		  </div>
		</div>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Cancelar
    </div>
    <div class="ui positive right labeled icon button" id="addPrestamo">
      Añadir préstamo
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>


<div class="ui positive message" id="adv">
  <i class="close icon"></i>
  <div class="header">
    Préstamo añadido con éxito!
  </div>
</div>



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
      <button id="op-modal" class="ui teal button"><i class="add icon"></i>Préstamo</button>
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

  <?php require_once('../function/pagination.php'); ?>

  </div>



<?php require_once('footer.php'); ?>