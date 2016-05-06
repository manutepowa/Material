$(document).ready(function(){

	$('#side_inicio').hide();
	$('#side_prestamos').hide();
	$('#side_materiales').hide();
	$('#side_personas').hide();
	$('#side_lugares').hide();

	$('#side_inicio').show();
	
	$('#btn_inicio').addClass("active");

	$(document).on('click', '#btn_inicio', function(){
		$('#side_inicio').show();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').hide();
	});

	$(document).on('click', '#btn_prestamos', function(){
		$('#side_inicio').hide();
		$('#side_prestamos').show();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').hide();
	});

	$(document).on('click', '#btn_materiales', function(){
		$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').show();
		$('#side_personas').hide();
		$('#side_lugares').hide();
	});

	$(document).on('click', '#btn_personas', function(){
		$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').show();
		$('#side_lugares').hide();
	});

	$(document).on('click', '#btn_lugares', function(){
		$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').show();
	});

	$(document).on('click', '.item', function(event){
		$('.item').removeClass("active");
		$(this).addClass("active");
	});	
});