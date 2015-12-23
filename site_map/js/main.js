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
		    	noResults   : 'No se encuentra la persona. :(<button>Añadir Persona</button>'
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

	var urlprestamo = '../function/getPrestamo.php';

	$("#prestamos tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlprestamo, function(prest){
		for (var j = 0; j < urlprestamo.length; j++) {
			$.each(prest, function(i, p){

				if(cnt != 12){
					var fDev;
					if(p[j][5]){fDev=p[j][5];}else{fDev="no devuelto"; error_field=1;}
					
					var newRow = "<tr value='"+p[j][0]+"'>"
									+"<td>"+p[j][1]+"</td>"
									+"<td>"+p[j][2]+"</td>"
									+"<td>"+p[j][3]+"</td>"
									+"<td>"+p[j][4]+"</td>";

					if(error_field == 1){
						newRow += +"<td class='negative'>"+fDev+"</td>"
								+"</tr>";

						error_field = 0;
					}
					else{
						newRow += +"<td>"+fDev+"</td>"
								+"</tr>";
					}
									
					$(newRow).appendTo("#prestamos tbody");

					cnt++;
				}
				
			});
		};
	});
});

// <div class='ui animated fade button' tabindex='0'>
//   <div class='visible content'>Sign-up for a Pro account</div>
//   <div class='hidden content'>
//     $12.99 a month
//   </div>
// </div>