<?php 
	require_once('header.php');
 ?>
<h1>Materiales</h1>

<button id="op-modal" class="ui default right labeled icon button">
	Añadir Préstamo
	<i class="plus icon"></i>
</button>

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


<?php require_once('footer.php'); ?>