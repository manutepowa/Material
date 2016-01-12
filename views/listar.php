<?php 
	require_once('header.php');
 ?>

<div class="ui small modal btnAddUser">
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


<div class="ui small modal" id="modal-add-prest">
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


<div class="ui small modal" id="modal-mod-prest">
  <div class="header">
    Modificar Préstamo
  </div>
  <div class="content">
    
    <div class="description">
      <div class="ui relaxed divided list">
      <div class="item">
      <div class="ui search medium" id="mper">
        <div class="ui icon input">
          <input id="mpersona" class="prompt" type="text" placeholder="Buscar Persona...">
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
        <div class="ui search medium" id="mmat">
        <div class="ui icon input">
          <input id="mmaterial" class="prompt" type="text" placeholder="Buscar Material...">
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
      <div class="ui search medium" id="mlug">
        <div class="ui icon input">
          <input id="mlugar" class="prompt" type="text" placeholder="Buscar Lugar...">
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
        <div class="ui search medium" id="mdat">
          <div class="ui left icon input">
          <input type="date" placeholder="Fecha" id="mdate">
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
    <div class="ui positive right labeled icon button" id="modPrestamo">
      Modificar préstamo
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

<div class="ui small modal" id="mod-dev">
  <div class="header">
    Devolución de Préstamo
  </div>
  <div class="content">
    <p>¿Quiere usar la fecha y hora actual?</p>
    <button class="ui button teal">Confirmar</button>
    <p>Si no quiere utilizar la fecha y hora actual, indique uno aquí:</p>
    <div class="ui action input">
      <input type="date" name="dat-dev">
      <button class="ui icon button">
      Devolver
      </button>
    </div>
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

    <table id="prestamos" class="ui selectable celled teal table">
      <thead>
        <tr>
          <th>MATERIAL</th>
          <th>PERSONA</th>
          <th>LUGAR</th>
          <th>F. PRÉSTAMO</th>
          <th>F. DEVOLUCIÓN</th>
          <th>DEVOLVER</th>
        </tr>
      </thead>
      <tbody>
      <!-- http://bootsnipp.com/snippets/featured/panel-table-with-filters-per-column -->
      </tbody>
    </table>

  </div>



<?php require_once('footer.php'); ?>