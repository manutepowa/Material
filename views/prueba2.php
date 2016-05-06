<?php require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/header.php'); ?>

<div class="ui first coupled modal">
  <div class="header">
    Modal #1
  </div>
  <div class="image content">
    <div class="image">
      <i class="right arrow icon"></i>
    </div>
    <div class="description">
      <p>We have more to share with you. Follow us along to modal 2</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui primary button">Proceed</div>
  </div>
</div>

<div class="ui small second coupled modal">
  <div class="header">
    Modal #2
  </div>
  <div class="content">
    <div class="description">
      <p>That's everything!</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui approve button">
      <i class="checkmark icon"></i>
      All Done
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


<?php require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/footer.php'); ?>