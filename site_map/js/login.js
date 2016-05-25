jQuery(document).ready(function($) {

	$('form').submit(function(event) {
		// var user = $('input')[0].value;
		// var pass = $('input')[1].value;

		var data = $(this).serialize();

		$.ajax({
			url: 'function/login.php',
			type: 'POST',
			data: data,
			success: function(event){
				if(event == '1'){
					window.location = 'views/admin.php';
				}
				else if(event == '-1'){
					$('#error').html('<div class="ui error message visible"><p><b>ERROR:</b> Usuario incorrecto.</p></div>');
				}
				else if(event == '-2'){
					$('#error').html('<div class="ui error message visible"><p><b>ERROR:</b> Contrase&ntilde;a incorrecta.</p></div>');
				}
			}
		});
		return false;
	});
});