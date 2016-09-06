<?php 
	session_start();
	if(!empty($_SESSION)){header("Location: ../views/admin.php");}
 ?>
<!DOCTYPE html>
 <html lang="es">
 <head>
 	<meta charset="UTF-8">
 	<title>Materiales OC</title>
 	<link rel="shortcut icon" href="site_map/images/favicon.png">
 	<link rel="stylesheet" href="site_map/Semantic-UI-CSS-master/semantic.min.css">
 	<style type="text/css">body {background-color: #DADADA;}body > .grid {height: 100%;}.image {margin-top: -100px;}.column {max-width: 450px;}.powers{font-size: 7pt;text-align: center;}

.section{
	background-color:rgba(255,255,255,0.8);
	visibility: hidden;
	display: none;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 50;
}
.centro{
  vertical-align: middle;
  display: table-cell;
  position: relative;
  color: #000;
  text-align: center;
}

.centro img{
  display: block;
  margin: 10px auto;
  width: 80px;
}</style>
 </head>
 <body>
 	<div class="ui middle aligned center aligned grid">
	  <div class="column">
	    <h2 class="ui teal image header">
	      <img src="site_map/images/iconLogin.png" height="128" width="128" class="image">
	      <div class="content">
	        Introduce los datos de usuario
	      </div>
	    </h2>
	    <form action="function/login.php" class="ui large form" method="POST">
	      <div class="ui stacked segment">
	        <div class="field">
	          <div class="ui left icon input">
	            <i class="user icon"></i>
	            <input type="text" name="usuario" required="required" placeholder="Nombre de usuario">
	          </div>
	        </div>
	        <div class="field" id="f2">
	          <div class="ui left icon input">
	            <i class="lock icon"></i>
	            <input type="password" name="contrasena" required="required" placeholder="Contraseña">
	          </div>
	        </div>
	        <div id="error"></div><br />
	        <button class="ui fluid large teal submit button">Acceder</button>
	      </div>

	      <div class="ui error message"></div>

	    </form>
	  </div>
	</div>

	<section class="section">
		<div class="centro"> 
			<img src="../site_map/images/logoumh.png" alt="Cargando...">
			<span class="loader loader-simple"></span>
			<!-- Cargando... -->
		</div>
	</section>

	<div class="powers">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a></div>
 	<script src="site_map/js/jquery-1.11.3.min.js"></script>
	<script src="site_map/Semantic-UI-CSS-master/semantic.min.js"></script>
	<script src="site_map/js/login.js"></script>
	
</body>
</html>