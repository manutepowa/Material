$(document).ready(function(){
	$('.filtros .filtro input').keyup(function(e){
		var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        




        console.log($inputContent);

    });

});