<?php 
	require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/header.php');
 ?>


<div class="ui modal btnAddUser">
  <i class="close icon"></i>
  <div class="header">
    Profile Picture
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img src="../site_map/images/addUser.png" height="128" width="128">
    </div>
    <div class="description">
      <div class="ui header">We've auto-chosen a profile image for you.</div>
      <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Nope
    </div>
    <div class="ui positive right labeled icon button">
      Yep, that's me
      <i class="checkmark icon"></i>
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
</div>

<?php require_once($_SERVER['DOCUMENT_ROOT'].'/Material/views/footer.php'); ?>