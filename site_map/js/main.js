$(document).ready(function(){

	$('.message').fadeOut(0);

	$('.message .close')
	  .on('click', function() {
	    $(this)
	    	.closest('.message')
	    	.transition('fade')
	    	;
	})
	;

	$('#op-modal').click(function(event) {
		$('#modal-add-prest')
			.modal({blurring:true})
			.modal('show')
		;
	});

	$(document).on('click', '.results', function(){
		var desc = $(this).parents('.search').siblings('.content').find('.description');
		var value = $(this).siblings('.input').find('input').val();
		desc.html(value);
	});

	$('input[type=date]').blur(function(event) {
		var desc = $(this).parents('.search').siblings('.content').find('.description');
		desc.html('Prestado el: '+$(this).val());
	});

	$('#addPrestamo').click(function(event) {

		var persona = $('#persona').val();
		var lugar = $('#lugar').val();
		var material = $('#material').val();
		var date = $('#date').val();

		$.ajax({
			url: '../function/addPrestamo.php',
			type: 'POST',
			data: {per: persona, lug: lugar, mat: material, dat: date},
			success: function(event){
				if(event == '1'){
					$('.message').fadeIn('500');
					$('#persona').val('');
					$('#lugar').val('');
					$('#material').val('');
					$('#date').val('');
				}

				loadList();

			}
		});
		
	});

	$('#per')
		  .search({
		    apiSettings: {
		      url: '../function/getPerson.php?q={query}'
		    },
		    fields: {
		      results : '0',
		      title   : '1'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : 'No se encuentra la persona. :(<br><button class="ui button teal">Añadir Persona</button>'
			},
		  })
		;

	$('#mat')
	  .search({
	    apiSettings: {
	      url: '../function/getMaterial.php?q={query}'
	    },
	    fields: {
	      results : '0',
	      title   : '1'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : 'No se encuentra el material. :('
		},
	  })
	;

	$('#lug')
	  .search({
	    apiSettings: {
	      url: '../function/getLugar.php?q={query}'
	    },
	    fields: {
	      results : '0',
	      title   : '1'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : 'No se encuentra el lugar. :('
		},
	  })
	;

	$('#modPrestamo').click(function(event) {

		var mpersona = $('#mpersona').val();
		var mlugar = $('#mlugar').val();
		var mmaterial = $('#mmaterial').val();
		var mdate = $('#mdate').val();

		if(mpersona == undefined || mlugar == undefined || mmaterial == undefined || mdate == undefined) return;

		$.ajax({
			url: '../function/modPrestamo.php',
			type: 'POST',
			data: {'per': mpersona, 'lug': mlugar, 'mat': mmaterial, 'dat': mdate, 'id-prest':id},
			success: function(event){

				$('.message').fadeIn('500');
				$('#mpersona').val('');
				$('#mlugar').val('');
				$('#mmaterial').val('');
				$('#mdate').val('');
				loadList();
				
			}
		});
		
	});

	$('#mper')
		  .search({
		    apiSettings: {
		      url: '../function/getPerson.php?q={query}'
		    },
		    fields: {
		      results : '0',
		      title   : '1'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : 'No se encuentra la persona. :(<div><button class="ui button teal">Añadir Persona</button></div>'
			},
		  })
		;

	$('#mmat')
	  .search({
	    apiSettings: {
	      url: '../function/getMaterial.php?q={query}'
	    },
	    fields: {
	      results : '0',
	      title   : '1'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : 'No se encuentra el material. :('
		},
	  })
	;

	$('#mlug')
	  .search({
	    apiSettings: {
	      url: '../function/getLugar.php?q={query}'
	    },
	    fields: {
	      results : '0',
	      title   : '1'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : 'No se encuentra el lugar. :('
		},
	  })
	;

	loadList();

	var id;

	$(document).on('click', '.dev', function(event) {
		event.preventDefault();
		id = $(this).siblings('input').val();
		$('#mod-dev').modal('show');
	});

	$(document).on('click', '.del', function(event) {
		event.preventDefault();
		id = $(this).siblings('input').val();
		$('#mod-del').modal('show');
	});

	$(document).on('click', '.mod', function(event) {
		event.preventDefault();
		id = $(this).siblings('input').val();
		$('#modal-mod-prest')
			.modal({blurring:true})
			.modal('show')
		;
	});

	$(document).on('click', '#actual-date', function(event){
		event.preventDefault();

		var d = new Date();
		var  month = d.getMonth()+1;
		var date = d.getFullYear()+'-'+month+'-'+d.getDate();

		$.ajax({
			url: '../function/addDevolucion.php',
			type: 'POST',
			data: {'dat-dev': date, 'id-prest':id},
			success: function(e){
				$('#mod-dev').modal('hide')
				loadList();
			}
		});
		
	});

	$(document).on('click', '#date-select', function(event) {
		event.preventDefault();

		var date = $(this).siblings('input[type=date]').val();
		if(date == undefined) return;

		$.ajax({
			url: '../function/addDevolucion.php',
			type: 'POST',
			data: {'dat-dev': date, 'id-prest':id},
			success: function(e){
				$('#mod-dev').modal('hide')
				loadList();
			}
		});

	});

	$(document).on('click', '.approve', function(event) {
		event.preventDefault();
		$.ajax({
			url: '../function/delPrestamo.php',
			type: 'POST',
			data: {'id-prest': id},
			success: function(event){
				loadList();
			}
		})
		;
		
	});

});

function loadList(){
	var urlprestamo = '../function/getPrestamo.php';

	$("#prestamos tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlprestamo, function(prest){
		for (var j = 0; j < urlprestamo.length; j++) {
			$.each(prest, function(i, p){

				if(cnt != 12){
					var fDev;
					if(p[j][5]){fDev=p[j][5];}else{fDev="No devuelto"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p[j][0]+"'>";

						error_field = 0;
					}
					else{
						var newRow = "<tr data-value='"+p[j][0]+"'>";
					}
					
					newRow += 	"<td>"+p[j][1]+"</td>"
								+"<td>"+p[j][2]+"</td>"
								+"<td>"+p[j][3]+"</td>"
								+"<td>"+p[j][4]+"</td>"
								+"<td>"+fDev+"</td>"
								+"<td style='text-align:center'>"
									+"<button title='Devolver' class='dev ui blue icon button'><i class='large icon attach'></i></button>"
									+"<button title='Modificar' class='mod ui green icon button'><i class='large icon edit'></i></button>"
									+"<button title='Borrar' class='del ui red icon button'><i class='large icon trash'></i></button>"
									+"<input type='hidden' name='id-prest' value='"+p[j][0]+"'/>"
								+"</td>"
								+"</tr>";

					
									
					$(newRow).appendTo("#prestamos tbody");

					cnt++;
				}
				
			});
		};
	});
}