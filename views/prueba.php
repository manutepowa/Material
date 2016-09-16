<?php 
	session_start();
	// require_once('config/config.php');
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/connect_mysqli.php');
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/function/seguridad.php');
	$conexion = connect();
	if ($conexion->connect_error) {
		die("Fallo al conectar: ".$conexion->connect_error);
		echo "Error";
	}
 ?>

 <!DOCTYPE html>
 <html lang="es">
 <head>
 	<meta charset="UTF-8">
 	<title>Materiales SC</title>
 	<link rel="shortcut icon" href="../site_map/images/favicon.png">
 	<link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
 	<link rel="stylesheet" href="../site_map/Semantic-UI-CSS-master/semantic.min.css">
 	<link rel="stylesheet" href="../site_map/css/listar_style.css">
 	<link rel="stylesheet" href="../site_map/css/style.css">
 	<link rel="stylesheet" href="../site_map/css/admin.css">
 	<link rel="stylesheet" href="../site_map/css/style_loader.css">

 </head>
 <body>

<div class="cabecera admin">
	<img src="../site_map/images/logo.png" alt="logo">
    <span>Materiales SC</span>
    <a href="../function/salir.php" class="ui teal button">Cerrar sesión</a>
    <!-- <a id="op-modal" <?//php echo "data-user='".$_SESSION["id_user"]."'"; ?> class="ui teal button"><i class="add icon"></i>Préstamo</a> -->
    <?php 
    	echo "<span class='usuario'>Usuario: &nbsp;&nbsp;<strong>".$_SESSION["user"]."</strong></span>";
    ?>
</div>

<!-- <div class="ui bottom attached segment pushable"> -->
<div>
  <div id="menuizq" class="ui visible inverted left vertical sidebar menu">
	
  	
  	<!-- <a id="btn_inicio" class="item">
      <i class="home icon"></i>
      Inicio
    </a> -->
    <p></p>
    <a id="btn_administrar" class="item">
      <!-- <i class="settings icon"></i> -->
      <i class="add icon"></i>
		<?php 
			if($_SESSION["admin"] == "SI"){
				echo "Administrar";
			}
			else{
				echo "Dar de alta";
			}
		?>
    </a>
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

    <?php 

    // 	if($_SESSION["admin"] == "SI"){
	   //  	echo "<a id='btn_administrar' class='item'>
				//     <i class='settings icon'></i>
				//     Administrar
				// </a>";
    // 	}

    	// echo "<p class='usuario'>Usuario: &nbsp;&nbsp;<strong>".$_SESSION["user"]."</strong></p>";

     ?>
  </div>
  <div class="admincontainer pusher">

  <div id="loader"></div>

	<section class="section">
		<div class="centro"> 
			<img src="../site_map/images/logoumh.png" alt="Cargando...">
			<span class="loader loader-simple"></span>
			<!-- Cargando... -->
		</div>
	</section>	

  <div id="loader2"></div>

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

	<div class="ui positive message" id="advaddpre">
	  <i class="close icon"></i>
	  <div class="header">
	    ¡Préstamo añadido con éxito!
	  </div>
	</div>

	<div class="ui positive message" id="advaddmat">
	  <i class="close icon"></i>
	  <div class="header">
	    ¡Material añadido con éxito!
	  </div>
	</div>

	<div class="ui positive message" id="advaddper">
	  <i class="close icon"></i>
	  <div class="header">
	    ¡Persona añadida con éxito!
	  </div>
	</div>

	<div class="ui positive message" id="advaddlug">
	  <i class="close icon"></i>
	  <div class="header">
	    ¡Lugar añadido con éxito!
	  </div>
	</div>

	<div class="ui positive message" id="advaddusu">
	  <i class="close icon"></i>
	  <div class="header">
	    ¡Usuario añadido con éxito!
	  </div>
	</div>

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

	<div id="side_administrar" class="ui basic segment">
    	<div id="administrar_container" class="ui container">
      		<h3 class="ui header">
      			<?php 
					if($_SESSION["admin"] == "SI"){
						echo "Administrar";
					}
					else{
						echo "Dar de alta";
					}
				?>
      		</h3>
      		<?php 
				if($_SESSION["admin"] == "SI"){
					echo "<p>Apartado para administrar los préstamos, materiales, personas, lugares y usuarios.</p>";
				}
				else{
					echo "<p>Apartado para dar de alta préstamos, materiales, personas, lugares y usuarios.</p>";
				}
			?>
      		
			<div class="ui secondary pointing menu">
				<?php 
					if($_SESSION["admin"] == "SI"){
						echo "<a id='btn_admin_pres' class='item'>Préstamos</a>
							  <a id='btn_admin_mat' class='item'>Materiales</a>
							  <a id='btn_admin_per' class='item'>Personas</a>
							  <a id='btn_admin_lug' class='item'>Lugares</a>
							  <a id='btn_admin_usu' class='item'>Usuarios</a>";
					}
				?>
				<div class="right menu">
					<!-- <a class="ui item"><i class="add icon teal"></i></a> -->
					<div class="ui icon top right pointing dropdown">
					  <i class="add icon teal" title="Añadir"></i><span>Nuevo</span>
					  <div class="menu">
					    <div id="btn_admin_addpres" class="item"><i class="block layout icon"></i>Préstamo</div>
					    <div id="btn_admin_addmat" class="item"><i class="archive icon"></i>Material</div>
					    <div id="btn_admin_addper" class="item"><i class="user icon"></i>Persona</div>
					    <div id="btn_admin_addlug" class="item"><i class="world icon"></i>Lugar</div>
					    <div id="btn_admin_addusu" class="item"><i class="users icon"></i>Usuario</div>
					  </div>
					</div>
				</div>
			</div>
			<div class="ui segment">

				<div id="addprestamo_segment">
					<form id="addprestamo" class="ui equal width form" action="">
						<div class="center titform">Añadir un nuevo préstamo</div>
						<div class="fields">
								<div class="five wide field">
								<label>Persona</label>
								<select class="ui search selection dropdown" name="persona">
									<option value="">Nombre completo . . .</option>
								</select>
							</div>
								<div class="five wide field">
								<label>Lugar</label>
								<select class="ui search selection dropdown" name="lugar">
									<option value="">Lugar donde se utilizará el material . . .</option>
								</select>
							</div>
							<div class="four wide field">
								<label>Fecha</label>
								<div class="ui left icon input">
									<input type="date" name="date">
									<i class="calendar icon"></i>
								</div>
							</div>
							<div class="two wide field">
								<label>Hora</label>
								<div class="ui left icon input">
									<input type="time" name="time">
									<i class="time icon"></i>
								</div>
							</div>
						</div>
						<div class="fields">
							<div class="field">
								<label>Observaciones</label>
								<textarea rows="3" name="observaciones" placeholder="Campo no obligatorio. Se podrá anotar el programa o la tarea a la que se destinará el material prestado . . ."></textarea>
							</div>
						</div>
						<div class="center inline fields">
							<div class="three wide field"></div>
							<div class="eight wide field center">
								<label>Materiales</label>
								<select class="ui multiple selection dropdown" name="materiales" multiple="">
									<option value="">Seleccionar materiales . . .</option>
								</select>
							</div>
							<div class="four wide field"></div>
						</div>
						<div id="erraddprestamo" class="ui negative message">
							<i class="close icon"></i>
							<div class="header">
								Rellene todos los campos, ninguno puede quedar vacío salvo las observaciones.
							</div>
						</div>
						<div class="center">
							<div class="ui submit button" <?php echo "data-user='".$_SESSION["id_user"]."'"; ?>>Crear préstamo</div>
						</div>
					</form>
				</div>

				<div id="prestamos_segment">
					<!-- <div class="ui styled accordion">
					  <div class="title">
					    <i class="dropdown icon"></i>
					    What is a dog?
					  </div>
					  <div class="content">
					    <p class="transition hidden">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					  </div>
					  <div class="title">
					    <i class="dropdown icon"></i>
					    What kinds of dogs are there?
					  </div>
					  <div class="content">
					    <p class="transition hidden">There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
					  </div>
					  <div class="title">
					    <i class="dropdown icon"></i>
					    How do you acquire a dog?
					  </div>
					  <div class="content">
					    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
					    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
					  </div>
					</div> -->
					<!-- <div class="ui accordion"> -->
						<table class="ui teal table accordion">
							<thead>
								<tr>
									<th>Food</th>
									<th>Calories</th>
									<th>Protein</th>
								</tr>
							</thead>
							<tbody>
								<tr class="title">
									<td>Apples</td>
									<td>200</td>
									<td>0g</td>
								</tr>
								<tr class="content">
									<td>Orange</td>
									<td>310</td>
									<td>0g</td>
								</tr>
								<tr class="title">
									<td>Apples</td>
									<td>200</td>
									<td>0g</td>
								</tr>
								<tr class="content">
									<td>Orange</td>
									<td>310</td>
									<td>0g</td>
								</tr>
								<tr class="title">
									<td>Apples</td>
									<td>200</td>
									<td>0g</td>
								</tr>
								<tr class="content">
									<td>Orange</td>
									<td>310</td>
									<td>0g</td>
								</tr>
							</tbody>
						</table>
					<!-- </div> -->

					<!-- <div class="ui styled accordion">
					
						<table>
							<tr>
								<th>MATERIALES</th>
								<th>RESPONSABLE</th>
								<th>LUGAR</th>
								<th>FECHA PRÉSTAMO</th>
								<th>FECHA DEVOLUCIÓN</th>
							</tr>
							<tr class="title">
								<td>Marerial 1</td>
								<td>Responsable 1</td>
								<td>Lugar 1</td>
								<td>Fecha préstamo 1</td>
								<td>Fecha devolución 1</td>
							</tr>
							<tr class="content">
								<td colspan="5"><p>Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila Contenido de la primera fila </p></td>
							</tr>
							<tr class="title">
								<td>Marerial 2</td>
								<td>Responsable 2</td>
								<td>Lugar 2</td>
								<td>Fecha préstamo 2</td>
								<td>Fecha devolución 2</td>
							</tr>
							<tr class="content">
								<td colspan="5"><p>Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila Contenido de la segunda fila </p></td>
							</tr>
						</table>

					</div> -->
				</div>

				<div id="addmaterial_segment">
					<form id="addmaterial" class="ui form" action="">
						<div class="center titform">Añadir un nuevo material</div>
						<div class="center inline fields">
							<div class="four wide field"></div>
							<div class="eight wide field">
								<label>Descripción</label>
								<input type="text" name="material" placeholder="Ej: Trípode 1 . . .">
							</div>
						</div>
						<div id="erraddmat" class="ui negative message">
							<i class="close icon"></i>
							<div class="header">
								Rellene el campo destinado para el material, no puede quedar vacío.
							</div>
						</div>
						<div class="center">
							<div class="ui submit button">Crear material</div>
						</div>
					</form>
				</div>

				<div id="materiales_segment">
				
					<div class="ui accordion">
					  <!-- <div class="title active">
					    <i class="dropdown icon"></i>
					    What is a dog?
					  </div>
					  <div class="content active">
					    <p class="transition visible" style="display: block !important;">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
					  </div> -->
					  <div class="title">
					    <i class="dropdown icon"></i>
					    What kinds of dogs are there?
					  </div>
					  <div class="content">
					    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
					  </div>
					  <div class="title">
					    <i class="dropdown icon"></i>
					    How do you acquire a dog?
					  </div>
					  <div class="content">
					    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
					    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
					  </div>
					  <div class="title">
					    <i class="dropdown icon"></i>
					    Micrófono de corbata
					  </div>
					  <div class="content">
					    <p><table class="ui teal table">
					    	<tr>
					    		<td>hola</td>
					    		<td>adios</td>
					    	</tr>
					    	<tr>
					    		<td>buenas</td>
					    		<td>tardes</td>
					    	</tr>
					    </table></p>
					  </div>
					</div>
		
				</div>

				<div id="addpersona_segment">
					<form id="addpersona" class="ui form" action="">
						<div class="center titform">Añadir una nueva persona</div>
						<div class="center inline fields">
							<div class="four wide field"></div>
							<div class="eight wide field">
								<label>Nombre</label>
								<input type="text" name="persona" placeholder="Ej: Francisco Martínez . . .">
							</div>
						</div>
						<div id="erraddper" class="ui negative message">
							<i class="close icon"></i>
							<div class="header">
								Rellene el campo destinado para el nombre, no puede quedar vacío.
							</div>
						</div>
						<div class="center">
							<div class="ui submit button">Crear persona</div>
						</div>
					</form>
				</div>

				<div id="personas_segment">
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
					<p>Apartado para la administración de personas.</p>
				</div>

				<div id="addlugar_segment">
					<form id="addlugar" class="ui form" action="">
						<div class="center titform">Añadir un nuevo lugar</div>
						<div class="center inline fields">
							<div class="four wide field"></div>
							<div class="eight wide field">
								<label>Lugar</label>
								<input type="text" name="lugar" placeholder="Ej: Ed. Altet - Elche . . .">
							</div>
						</div>
						<div id="erraddlug" class="ui negative message">
							<i class="close icon"></i>
							<div class="header">
								Rellene el campo destinado para el lugar, no puede quedar vacío.
							</div>
						</div>
						<div class="center">
							<div class="ui submit button">Crear lugar</div>
						</div>
					</form>
				</div>

				<div id="lugares_segment">
					<p>Apartado para la administración de lugares.</p>
					<p>Apartado para la administración de lugares.</p>
				</div>

				<div id="addusuario_segment">
					<form id="addusuario" class="ui form" action="">
						<div class="ui equal width form">
							<div class="center titform">Añadir un nuevo usuario</div>
							<div class="fields">
									<div class="field">
									<label>Usuario</label>
									<input type="text" name="usuario" placeholder="Nombre de usuario . . .">
								</div>
								<div class="field">
									<label>Privilegios del usuario</label>
									<select class="ui dropdown" name="privilegios">
										<option value="">Seleccionar privilegios</option>
										<option value="0">Editor</option>
										<option value="1">Administrador</option>
									</select>
								</div>
							</div>
							<div class="fields">
								<div class="field">
									<label>Contraseña</label>
									<input type="password" name="contrasena" placeholder="Escribir contraseña . . .">
								</div>
								<div class="field">
									<label>Repetir contraseña</label>
									<input type="password" name="repcontrasena" placeholder="Repetir contraseña . . .">
								</div>
							</div>

							<div id="erraddusu" class="ui negative message">
								<i class="close icon"></i>
								<div class="header">
									Rellene todos los campos, ninguno puede quedar vacío.
								</div>
							</div>

							<div id="erraddusupass" class="ui negative message">
								<i class="close icon"></i>
								<div class="header">
									Las contraseñas no coinciden, revíselas para continuar.
								</div>
							</div>

							<div id="erraddusuname" class="ui negative message">
								<i class="close icon"></i>
								<div class="header">
									Ya existe un usuario con ese nombre, pruebe con otro diferente.
								</div>
							</div>

							<div class="center">
								<div class="ui submit button">Crear usuario</div>
							</div>
						</div>
					</form>
				</div>

				<div id="usuarios_segment">
					<p>Apartado para la administración de usuarios.</p>
					<p>Apartado para la administración de usuarios.</p>
					<p>Apartado para la administración de usuarios.</p>
					<p>Apartado para la administración de usuarios.</p>
				</div>
				
			</div>
      	</div>
    </div>

    <!-- <div id="side_inicio" class="ui basic segment"> -->
    <div id="side_prestamos" class="ui basic segment">
      <!-- <h3 class="ui header">Inicio</h3> -->


		<!-- <div class="ui small modal btnAddUser">
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
		</div> -->

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

		  		  <!-- <div class="item">
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
		  		  </div> -->

		  		<div class="item">
		          <table class="adddate">
		            <tr>
		              <td>
		              	<div class="ui input">
			                <input type="date" id="date">
			                <input type="time" id="time">
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
			  		<div class="ui form">
				        <div class="field">
						    <textarea id="obser" placeholder="Observaciones..." rows="2"></textarea>
						</div>
					</div>
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
		                <i id="addRowMat" class="add circle icon"></i><!-- <i class="minus circle icon"></i> -->
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
		                <div class="ui input">
			                <input type="date" id="mdate">
			                <input type="time" id="mtime">
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

		<!-- <div class="ui positive message" id="advadd">
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
		</div> -->

		<div class="ui small modal" id="mod-dev">
		  <div class="header">
		    Devolución del préstamo
		  </div>
		  <div class="content row">
		      <p>Indique si quiere usar la fecha y hora actual, o una fecha y hora diferente como fecha de devolución.</p>
		    <div class="columna1">
		      <button class="ui button teal" id="actual-date">Devolver ahora</button>
		    </div>
		    <div class="columna2">
		      <div class="ui action input">
		        <input type="date" name="dat-dev">
		        <input type="time" name="time-dev">
		        <button class="ui icon button" id="date-select">Devolver este día y hora</button>
		      </div>
		    </div> 
		    <div id="errdevpres" class="ui negative message">
		      <i class="close icon"></i>
		      <div class="header">
		        Debe indicar la fecha y hora de devolución.
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
		        <th></th>
		        <th>MATERIALES</th>
		        <th>RESPONSABLE</th>
		        <th>LUGAR</th>
		        <th>FECHA PRÉSTAMO</th>
		        <th>FECHA DEVOLUCIÓN</th>
		        <th></th>
		      </tr>
		    </thead>
		    <tbody>
		    </tbody>
		  </table>

			<div class="center">
			  	<div id="paginadorPrestamos" class="ui borderless pagination menu">

					<!-- AQUI VAN LAS PAGINAS DEL PAGINADOR DE LOS PRESTAMOS -->
					
				</div>
			</div>

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

			<div class="center">
			  	<div id="paginadorMateriales" class="ui borderless pagination menu">

					<!-- AQUI VAN LAS PAGINAS DEL PAGINADOR DE LOS MATERIALES -->

				</div>
			</div>

		</div>
		<div id="materiales_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_m" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Materiales</button>
			<table id="t_materiales_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="six wide">PERSONA</th>
						<th class="four wide">LUGAR</th>
						<th class="three wide">F. PRÉSTAMO</th>
						<th class="three wide">F. DEVOLUCIÓN</th>
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

			<div class="center">
			  	<div id="paginadorPersonas" class="ui borderless pagination menu">

					<!-- AQUI VAN LAS PAGINAS DEL PAGINADOR DE LOS PERSONAS -->

				</div>
			</div>

      	</div>
      	<div id="personas_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_p" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Personas</button>
      		<table id="t_personas_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="six wide">MATERIALES</th>
						<th class="four wide">LUGAR</th>
						<th class="three wide">F. PRÉSTAMO</th>
						<th class="three wide">F. DEVOLUCIÓN</th>
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

			<div class="center">
			  	<div id="paginadorLugares" class="ui borderless pagination menu">

					<!-- AQUI VAN LAS PAGINAS DEL PAGINADOR DE LOS PERSONAS -->

				</div>
			</div>

      	</div>
      	<div id="lugares_container_hist" class="ui container">
      		<h3 class="ui header">Historial de préstamos</h3>
      		<p>A continuación se muestran todos los prestamos de <strong></strong>.</p>
      		<button id="volver_l" class="ui teal basic button"><i class="long arrow left icon"></i>Volver al listado de Lugares</button>
      		<table id="t_lugares_hist" class="ui celled teal table">
				<thead>
					<tr>
						<th class="six wide">MATERIALES</th>
						<th class="four wide">PERSONA</th>
						<th class="three wide">F. PRÉSTAMO</th>
						<th class="three wide">F. DEVOLUCIÓN</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
      	</div>
    </div>
    
  </div>
</div>

	
	<script src="../site_map/js/jquery-1.11.3.min.js"></script>
	<script src="../site_map/Semantic-UI-CSS-master/semantic.min.js"></script>
	<script src="../site_map/js/main-pag.js"></script>
	<script src="../site_map/js/filter.js"></script>
	<script src="../site_map/js/admin-pag.js"></script>
	
</body>
</html>