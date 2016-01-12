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

	// $(document).on('click', 'tr', function(event) {
	// 	console.log($(this).data('value'));
	// 	$('#modal-mod-prest')
	// 		.modal({blurring:true})
	// 		.modal('show')
	// 	;
	// });

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
					$('.ui.modal').close();
					$('#persona').val('');
					$('#lugar').val('');
					$('#material').val('');
					$('#date').val('');
				}
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

		$.ajax({
			url: '../function/modPrestamo.php',
			type: 'POST',
			data: {per: mpersona, lug: mlugar, mat: mmaterial, dat: mdate},
			success: function(event){
				if(event == '1'){
					$('.message').fadeIn('500');
					$('.ui.modal').close();
					$('#mpersona').val('');
					$('#mlugar').val('');
					$('#mmaterial').val('');
					$('#mdate').val('');
				}
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
								+"<td><input type='hidden' name='id-prest' value='"+p[j][0]+"'/><button class='dev ui button'>Devolver</button></td>"
								+"</tr>";

					
									
					$(newRow).appendTo("#prestamos tbody");

					cnt++;
				}
				
			});
		};
	});

	$(document).on('dblclick', 'td', function(event) {
		event.preventDefault();
		$field = $(this);
		$info = $field.html();

		if($info.indexOf('button') != -1) return;

		$field.html('<div class="ui action input"><input type="text" value="'+$info+'"><button class="ui icon button"><i class="ui icon save"></i></button></div>');
	});


	$(document).on('click', '.dev', function(event) {
		event.preventDefault();
		$('#mod-dev').modal('show');
	});

});

// <div class='ui animated fade button' tabindex='0'>
//   <div class='visible content'>Sign-up for a Pro account</div>
//   <div class='hidden content'>
//     $12.99 a month
//   </div>
// </div>