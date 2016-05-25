<?php require_once('header.php'); ?>

<div class="cabecera admin">
  <!-- <div class="ui container"> -->
  	<!-- <div> -->
		<img src="../site_map/images/logo.png" alt="logo">
    	<span>Materiales SC</span>
	<!-- </div> -->
      <!-- <img src="../site_map/images/logo.png" alt="logo">
      Materiales SC -->
      <a href="../function/salir.php" class="ui teal button">Cerrar sesión</a>
      <a id="op-modal" class="ui teal button"><i class="add icon"></i>Préstamo</a>
  <!-- </div> -->
</div>

<!-- <div class="ui bottom attached segment pushable"> -->
<div>
  <div id="menuizq" class="ui visible inverted left vertical sidebar menu">
	
  	
  	<!-- <a id="btn_inicio" class="item">
      <i class="home icon"></i>
      Inicio
    </a> -->
    <p></p>
    <a id="btn_prestamos" class="item">
      <i class="block layout icon"></i>
      Préstamos
    </a>
    <a id="btn_materiales" class="item">
      <i class="archive icon"></i>
      Materiales
    </a>
    <a id="btn_personas" class="item">
      <i class="user icon"></i>
      Personas
    </a>
    <a id="btn_lugares" class="item">
      <i class="world icon"></i>
      Lugares
    </a>
  </div>
  <div class="admincontainer pusher">

	<!-- <div class="center">
		<svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
		  <circle fill="#00B5AD" stroke="none" cx="6" cy="50" r="6">
		    <animateTransform 
		       attributeName="transform" 
		       dur="1s" 
		       type="translate" 
		       values="0 15 ; 0 -15; 0 15" 
		       repeatCount="indefinite" 
		       begin="0.1"/>
		  </circle>
		  <circle fill="#00B5AD" stroke="none" cx="30" cy="50" r="6">
		    <animateTransform 
		       attributeName="transform" 
		       dur="1s" 
		       type="translate" 
		       values="0 10 ; 0 -10; 0 10" 
		       repeatCount="indefinite" 
		       begin="0.2"/>
		  </circle>
		  <circle fill="#00B5AD" stroke="none" cx="54" cy="50" r="6">
		    <animateTransform 
		       attributeName="transform" 
		       dur="1s" 
		       type="translate" 
		       values="0 5 ; 0 -5; 0 5" 
		       repeatCount="indefinite" 
		       begin="0.3"/>
		  </circle>
		</svg>
	</div> -->

    <!-- <div id="side_inicio" class="ui basic segment"> -->
    <div id="side_prestamos" class="ui basic segment">
      <!-- <h3 class="ui header">Inicio</h3> -->


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
		    Añadir nuevo material
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
		    Añadir nuevo lugar
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
		            <input type="text" name="lugar" id="alugar" placeholder="Nombre y apellidos">
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
		    Añadir nuevo préstamo
		  </div>

		  <div class="content">
		    
		    <div class="description">

		      <div class="ui relaxed divided list">

		  		  <div class="item">

		          <table class="addper">
		            <tr>
		              <td>
		                <div class="ui search medium" id="per">
		                  <div class="ui icon input">
		                    <input id="persona" class="prompt" type="text" placeholder="Buscar Persona...">
		                    <i class="search icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large user big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay persona añadida</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		  		  </div>

		  		  <div class="item">
		          <table class="addlug">
		            <tr>
		              <td>
		                <div class="ui search medium" id="lug">
		                  <div class="ui icon input">
		                    <input id="lugar" class="prompt" type="text" placeholder="Buscar Lugar...">
		                    <i class="search icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large world big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay lugar añadido</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		  		  </div>

		  		  <div class="item">
		          <table class="adddate">
		            <tr>
		              <td>
		                <div class="ui search medium" id="dat">
		                  <div class="ui left icon input">
		                    <input type="date" placeholder="Fecha" id="date">
		                    <i class="calendar icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large calendar big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay fecha añadida</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		  		  </div>

		        <div class="item">
		          <table class="addlistadomat">
		            <tr>
		              <td>
		                <div class="ui search medium" id="mat_0">
		                  <div class="ui icon input">
		                    <input id="material_0" name="material[]" class="prompt" type="text" placeholder="Buscar Material...">
		                    <i class="search icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large archive big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay material añadido</div>
		                </div>
		              </td>
		              <td>
		                <i id="addRowMat" class="add circle icon"></i>
		              </td>
		            </tr>
		          </table>  
		        </div>

			  </div>

		    </div>

		    <div id="erraddpres" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        No se puede añadir un préstamo con campos vacíos.
		      </div>
		    </div>

		    <div id="erraddprescrear" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        Rellene todos los campos. Si algún campo no se encuentra, deberá crearlo.
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
		    Modificar préstamo
		  </div>

		  <div class="content">

		    <div class="description">

		      <div class="ui relaxed divided list">

		        <div class="item">

		          <table class="modper">
		            <tr>
		              <td>
		                <div class="ui search medium" id="mper">
		                  <div class="ui icon input">
		                    <input id="mpersona" class="prompt" type="text" placeholder="Buscar Persona...">
		                    <i class="search icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large user big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay persona añadida</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		        </div>

		        <div class="item">
		          <table class="modlug">
		            <tr>
		              <td>
		                <div class="ui search medium" id="mlug">
		                  <div class="ui icon input">
		                    <input id="mlugar" class="prompt" type="text" placeholder="Buscar Lugar...">
		                    <i class="search icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large world big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay lugar añadido</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		        </div>

		        <div class="item">
		          <table class="moddate">
		            <tr>
		              <td>
		                <div class="ui search medium" id="mdat">
		                  <div class="ui left icon input">
		                    <input type="date" placeholder="Fecha" id="mdate">
		                    <i class="calendar icon"></i>
		                  </div>
		                  <div class="results"></div>
		                </div>
		              </td>
		              <td>
		                <i class="large calendar big aligned icon icpres"></i>
		              </td>
		              <td>
		                <div class="content">
		                  <div class="description">No hay fecha añadida</div>
		                </div>
		              </td>
		              <td></td>
		            </tr>
		          </table>
		        </div>

		      </div>

		    </div>

		    <div id="errmodpres" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        No se puede modificar un préstamo con campos vacíos.
		      </div>
		    </div>

		    <div id="errmodprescrear" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        Rellene todos los campos. Si algún campo no se encuentra, deberá crearlo.
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

		<div class="ui positive message" id="advadd">
		  <i class="close icon"></i>
		  <div class="header">
		    ¡Préstamo añadido con éxito!
		  </div>
		</div>

		<div class="ui positive message" id="advmod">
		  <i class="close icon"></i>
		  <div class="header">
		    ¡Préstamo modificado con éxito!
		  </div>
		</div>

		<div class="ui positive message" id="advdev">
		  <i class="close icon"></i>
		  <div class="header">
		    ¡Préstamo devuelto con éxito!
		  </div>
		</div>

		<div class="ui positive message" id="advdel">
		  <i class="close icon"></i>
		  <div class="header">
		    ¡Préstamo eliminado con éxito!
		  </div>
		</div>

		<div class="ui small modal" id="mod-dev">
		  <div class="header">
		    Devolución del préstamo
		  </div>
		  <div class="content row">
		      <p>Indique si quiere usar la fecha actual o una fecha diferente como fecha de devolución del préstamo.</p>
		    <div class="columna">
		      <button class="ui button teal" id="actual-date">Devolver hoy</button>
		    </div>
		    <div class="columna">
		      <div class="ui action input">
		        <input type="date" name="dat-dev">
		        <button class="ui icon button" id="date-select">Devolver este día</button>
		      </div>
		    </div> 
		    <div id="errdevpres" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        Debe indicar la fecha de devolución.
		      </div>
		    </div>
		  </div>
		</div>

		<div class="ui small modal" id="mod-del">
		  <div class="header">
		    Borrar préstamo
		  </div>
		  <div class="content">
		    ¿Desea realmente borrar el préstamo? No habrá vuelta atrás.
		  </div>
		  <div class="actions">
		    <div class="ui approve red button" id="accept-del">Aceptar</div>
		    <div class="ui cancel button">Cancelar</div>
		  </div>
		</div>

		<!-- <div class="cabecera">
		  <div class="ui container">
		      <img src="../site_map/images/logo.png" alt="logo">
		      Materiales SC
		      <a href="../function/salir.php" class="ui teal button">Cerrar sesión</a>
		      <a id="op-modal" class="ui teal button"><i class="add icon"></i>Préstamo</a>
		  </div>
		</div> -->

		<div id="contenido" class="ui container">

		  <div class="filtros">

		    <div class="filtro">
		      No devueltos: <br>
		      <div class="ui fitted toggle checkbox">
		        <input type="checkbox">
		        <label></label>
		      </div>
		    </div>
		    
		    <div class="filtro">
		      <input class="prompt" type="text" placeholder="Material...">
		    </div>
		    <div class="filtro">
		      <input class="prompt" type="text" placeholder="Persona...">
		    </div>
		    <div class="filtro">
		      <input class="prompt" type="text" placeholder="Lugar...">
		    </div>
		    <div class="filtro">
		      <input class="prompt" type="text" placeholder="Fecha préstamo...">
		    </div>
		    <div class="filtro">
		      <input class="prompt" type="text" placeholder="Fecha devolución...">
		    </div>
		    <!-- <div class="filtro"></div> -->
		  </div>

		  <table id="prestamos" class="ui celled teal table">
		    <thead>
		      <tr>
		        <th>MATERIALES</th>
		        <th>PERSONA</th>
		        <th>LUGAR</th>
		        <th>F. PRÉSTAMO</th>
		        <th>F. DEVOLUCIÓN</th>
		        <th></th>
		      </tr>
		    </thead>
		    <tbody>
		    </tbody>
		  </table>

		</div>


    </div>
    <!-- <div id="side_prestamos" class="ui basic segment">
    	<div class="ui container">
      		<h3 class="ui header">Préstamos</h3>
      		<p>Apartado para la administración de los préstamos</p>
      	</div>
    </div> -->
    <div id="side_materiales" class="ui basic segment">
    	<div id="materiales_container" class="ui container">
      		<h3 class="ui header">Materiales</h3>
      		<p>A continuación se muestran todos los materiales añadidos en la página.</p>
			<table id="t_materiales" class="ui celled teal table">
				<thead>
					<tr>
						<th class="ten wide">MATERIAL</th>
						<th class="three wide">ESTADO</th>
						<th class="three wide"></th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
		<div id="materiales_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_m" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Materiales</button>
			<table id="t_materiales_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="eight wide">PERSONA</th>
						<th class="four wide">LUGAR</th>
						<th class="two wide">F. PRÉSTAMO</th>
						<th class="two wide">F. DEVOLUCIÓN</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
    </div>
    <div id="side_personas" class="ui basic segment">
    	<div id="personas_container" class="ui container">
      		<h3 class="ui header">Personas</h3>
      		<p>A continuación se muestran todas las personas añadidas en la página.</p>
      		<table id="t_personas" class="ui celled teal table">
				<thead>
					<tr>
						<th class="ten wide">PERSONA</th>
						<th class="three wide">ESTADO</th>
						<th class="three wide"></th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
      	</div>
      	<div id="personas_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_p" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Personas</button>
      		<table id="t_personas_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="eight wide">MATERIALES</th>
						<th class="four wide">LUGAR</th>
						<th class="two wide">F. PRÉSTAMO</th>
						<th class="two wide">F. DEVOLUCIÓN</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
      	</div>
    </div>
    <div id="side_lugares" class="ui basic segment">
    	<div id="lugares_container" class="ui container">
      		<h3 class="ui header">Lugares</h3>
      		<p>A continuación se muestran todos los lugares añadidos en la página.</p>
      		<table id="t_lugares" class="ui celled teal table">
				<thead>
					<tr>
						<th class="ten wide">LUGAR</th>
						<th class="three wide">ESTADO</th>
						<th class="three wide"></th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
      	</div>
      	<div id="lugares_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_l" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Lugares</button>
      		<table id="t_lugares_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="eight wide">MATERIALES</th>
						<th class="four wide">PERSONA</th>
						<th class="two wide">F. PRÉSTAMO</th>
						<th class="two wide">F. DEVOLUCIÓN</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
      	</div>
    </div>
  </div>
</div>

<?php require_once('footer.php'); ?>