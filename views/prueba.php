<?php 
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/header.php');
 ?>


<div class="ui modal btnAddUser">
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
            <button class="ourColor ui right aligned button" type="submit">Submit</button>
          </div>
      </form>
    </div>
  </div>
</div>




<div class="ui bottom attached segment pushable">
  <div class="ui visible inverted left vertical sidebar menu">
    <a class="item">
      <i class="home icon"></i>
      Home
    </a>
    <a class="item">
      <i class="block layout icon"></i>
      Topics
    </a>
    <a class="item">
      <i class="smile icon"></i>
      Friends
    </a>
    <a class="item">
      <i class="calendar icon"></i>
      History
    </a>
  </div>
  <div class="pusher">
    <div class="ui basic segment">
      <h3 class="ui header">Application Content</h3>

      <p>
          <button class="ui basic button" onclick="$('.ui.modal.btnAddUser').modal('show')">
            <i class="icon user"></i>
            Add Friend
          </button>
      </p>
   <!--    <p>
          <button class="ui basic button" onclick="$('.ui.basic.modal').modal('show')">
            <i class="icon user"></i>
            Add Friend
          </button>
      </p>
      <p>
        <button class="ui basic button" onclick="$('.ui.basic.modal').modal('show')">
            <i class="icon user"></i>
            Add Friend
          </button>
      </p>
      <p>
          <button class="ui basic button" onclick="$('.ui.basic.modal').modal('show')">
            <i class="icon user"></i>
            Add Friend
          </button>
      </p> -->

    </div>
  </div>

  <div class="ui container">

Filtrar por:
  <div class="ui search">
  <input class="prompt" type="text" placeholder="Common passwords...">
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