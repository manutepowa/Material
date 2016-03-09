$(document).ready(function(){


	//BORRADO AUTOMÁTICO PARA UN FUTURO
	// var dat = new Date();

	// var actual-month = dat.getMonth();

	// if()

/* DEBUG */
 	function o(debug){
 		console.log(debug);
 	}
/* END DEBUG */

	$('.toggle').checkbox('set checked');

	$('.message').fadeOut(0);

	$('.message .close')
	  .on('click', function() {
	    // $(this)
	    // 	.closest('.message')
	    // 	.transition('fade')
	    // 	;

	    $('.message').fadeOut(300);

	    // $('.modal .message').fadeOut(300);
	})
	;

	$('#op-modal').click(function(event) {
		$('.modal .message').fadeOut(000);
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

		// $('.modal .message').fadeOut(000);

		var persona = $('#persona').val();
		var lugar = $('#lugar').val();
		var material = $('#material').val();
		var date = $('#date').val();
			
		if(persona == "" || lugar == "" || material == "" || date == ""){
			// alert("¡Rellene todos los campos!");
			$('#erraddpres').fadeIn(000);
			return false;
		}

		$.ajax({
			url: '../function/addPrestamo.php',
			type: 'POST',
			data: {'per': persona, 'lug': lugar, 'mat': material, 'dat': date},
			success: function(event){
				if(event == '1'){
					$('#advadd').fadeIn('500').delay(5000).fadeOut();
					$('#persona').val('');
					$('#lugar').val('');
					$('#material').val('');
					$('#date').val('');
					// $('.content > .description').val('');
					// $('.content .description').val('');
					// $('.content .description').val('');
					// $('.content .description').val('');
				
					if($('.toggle').checkbox('is checked')){
						loadList(1);
					}
					else{
						loadList(0);
					}
				}
				else{
					// alert("¡¡error!!");
					// return false;
					$('.modal .message').fadeOut(000);

					$('#modal-add-prest').modal('show');
					$('#erraddprescrear').fadeIn(000);
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
	    	noResults   : '<p class="center bold">Persona no encontrada.</p><button class="ui button teal add" id="addp">Crear persona</button>'
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
	    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addm">Crear material</button>'
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
	    	noResults   : '<p class="center bold">Lugar no encontrado.</p><button class="ui button teal add" id="addl">Crear lugar</button>'
		},
	  })
	;

	$('.modal .message').hide();

	$('#modPrestamo').click(function(event) {

		$('.modal .message').fadeOut(000);

		var mpersona = $('#mpersona').val();
		var mlugar = $('#mlugar').val();
		var mmaterial = $('#mmaterial').val();
		var mdate = $('#mdate').val();

		console.log("Persona: "+mpersona+" | Lugar: "+mlugar+" | Material: "+mmaterial+" | Fecha: "+mdate);

		if(mpersona == "" || mlugar == "" || mmaterial == "" || mdate == ""){
			$('#errmodpres').fadeIn(000);
			return false;
		}

		$.ajax({
			url: '../function/modPrestamo.php',
			type: 'POST',
			data: {'per': mpersona, 'lug': mlugar, 'mat': mmaterial, 'dat': mdate, 'id-prest':id},
			success: function(event){
				if(event == '1'){
					$('#advmod').fadeIn('500').delay(5000).fadeOut();
					$('#mpersona').val('');
					$('#mlugar').val('');
					$('#mmaterial').val('');
					$('#mdate').val('');
					if($('.toggle').checkbox('is checked')){
						loadList(1);
					}
					else{
						loadList(0);
					}
					// loadList(0);
				}
				else{
					// alert("¡¡error!!");
					// return false;
					$('.modal .message').fadeOut(000);

					$('#modal-mod-prest').modal('show');
					$('#errmodprescrear').fadeIn(000);
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
		    	noResults   : '<p class="center bold">Persona no encontrada.</p><button class="ui button teal add" id="addp">Crear persona</button>'
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
	    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addm">Crear material</button>'
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
	    	noResults   : '<p class="center bold">Lugar no encontrado.</p><button class="ui button teal add" id="addl">Crear lugar</button>'
		},
	  })
	;

	if($('.toggle').checkbox('is checked')){
		loadList(1);
	}
	else{
		loadList(0);
	}

	// loadList(0);

	var id;

	$(document).on('click', '.dev', function(event) {
		event.preventDefault();
		$('.modal .message').fadeOut(000);
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
		var dataRow = $(this).parent().parent(); 
		
		var nombreMod = dataRow.children('td').eq(1).text();
		var materialMod = dataRow.children('td').eq(0).text(); 
		var lugarMod = dataRow.children('td').eq(2).text(); 
		var fprestamoMod = dataRow.children('td').eq(3).text(); 
		o(nombreMod + ' --- ' + materialMod + ' --- ' + lugarMod + ' --- ' + fprestamoMod);

		$('.modal .message').fadeOut(0);

		$('#modal-mod-prest').find('#mpersona').val(nombreMod);
		$('#modal-mod-prest').find('#mmaterial').val(materialMod);
		$('#modal-mod-prest').find('#mlugar').val(lugarMod);
		$('#modal-mod-prest').find('#mdate').val(fprestamoMod);

		var descp = $('#mpersona').parents('.search').siblings('.content').find('.description');
		descp.html($('#mpersona').val());
		var descm = $('#mmaterial').parents('.search').siblings('.content').find('.description');
		descm.html($('#mmaterial').val());
		var descl = $('#mlugar').parents('.search').siblings('.content').find('.description');
		descl.html($('#mlugar').val());
		var descd = $('#mdate').parents('.search').siblings('.content').find('.description');
		descd.html('Prestado el: '+$('#mdate').val());

		$('#modal-mod-prest')
			.modal({blurring:true})
			.modal('show');
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
				$('#advdev').fadeIn('500').delay(5000).fadeOut();
				$('#mod-dev').modal('hide');
				// loadList(0);
				if($('.toggle').checkbox('is checked')){
					loadList(1);
				}
				else{
					loadList(0);
				}
			}
		});
		
	});

	$(document).on('change', 'input[name$="dat-dev"]', function(event) {
		$('.modal .message').fadeOut(000);
	});

	$(document).on('click', '#date-select', function(event) {
		event.preventDefault();

		var date = $(this).siblings('input[type=date]').val();
		if(date == ""){
			// alert("¡Seleccione la fecha de devolución!");
			$('#errdevpres').fadeIn(300);
			return false;
		}

		$.ajax({
			url: '../function/addDevolucion.php',
			type: 'POST',
			data: {'dat-dev': date, 'id-prest':id},
			success: function(e){
				$('#advdev').fadeIn('500').delay(5000).fadeOut();
				$('#mod-dev').modal('hide');
				// loadList(0);
				if($('.toggle').checkbox('is checked')){
					loadList(1);
				}
				else{
					loadList(0);
				}
			}
		});
		$(this).siblings('input[type=date]').val("0000-00-00");
	});

	$(document).on('click', '.approve', function(event) {
		event.preventDefault();
		$.ajax({
			url: '../function/delPrestamo.php',
			type: 'POST',
			data: {'id-prest': id},
			success: function(event){
				// loadList(0);
				if($('.toggle').checkbox('is checked')){
					loadList(1);
				}
				else{
					loadList(0);
				}
				$('#advdel').fadeIn('100').delay(5000).fadeOut();
			}
		})
		;
		
	});

	$(document).on('click', '#addp, #addmp', function(event) {
		event.preventDefault();
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		// o(valor);
		var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addPerson.php',
			type: 'POST',
			data: {'nombre': valor},
			success: function(event){
				// modal.modal('hide');
			}
		});
	
	});

	$(document).on('click', '#addm, #addmm', function(event) {
		event.preventDefault();
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addMaterial.php',
			type: 'POST',
			data: {'descripcion': valor},
			success: function(event){
				modal.modal('hide');
			}
		});
	
	});

	$(document).on('click', '#addl, #addml', function(event) {
		event.preventDefault();
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addLugar.php',
			type: 'POST',
			data: {'lugar': valor},
			success: function(event){
				modal.modal('hide');
			}
		});
	
	});

	$('.toggle').change(function(event) {
		if($(this).checkbox('is checked')){
			loadList(1);
		}
		else{
			loadList(0);
		}
	});

});

function loadList(q){
	var urlprestamo = '../function/getPrestamo.php?q='+q;

	$("#prestamos tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlprestamo, function(prest){
		for (var j = 0; j < urlprestamo.length; j++) {
			$.each(prest, function(i, p){

				if(cnt != p.length){
					var fDev;
					if(p[j][5]){fDev=p[j][5];}else{fDev="No devuelto"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p[j][0]+"'>";

						error_field = 0;
					}
					else{
						var newRow = "<tr data-value='"+p[j][0]+"'>";
					}
					
					// newRow += 	"<td>"+p[j][1]+"</td>"
					// 			+"<td>"+p[j][2]+"</td>"
					// 			+"<td>"+p[j][3]+"</td>"
					// 			+"<td>"+p[j][4]+"</td>"
					// 			+"<td>"+fDev+"</td>"
					// 			+"<td style='text-align:center'>"
					// 				+"<button title='Devolver' class='dev ui teal icon button'><i class='large icon attach'></i></button>"
					// 				+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
					// 				+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
					// 				+"<input type='hidden' name='id-prest' value='"+p[j][0]+"'/>"
					// 			+"</td>"
					// 			+"</tr>";

					newRow += 	"<td>"+p[j][1]+"</td>"
								+"<td>"+p[j][2]+"</td>"
								+"<td>"+p[j][3]+"</td>"
								+"<td>"+p[j][4]+"</td>"
								+"<td>"+fDev+"</td>";
							if (fDev !== 'No devuelto') {
								newRow +=	"<td style='text-align:center'>"
									+"<button title='Devolver' class='dev ui teal icon button' disabled><i class='large icon attach'></i></button>"
									+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
									+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
									+"<input type='hidden' name='id-prest' value='"+p[j][0]+"'/>"
								+"</td>"
								+"</tr>";
							}
							else{
								newRow +=	"<td style='text-align:center'>"
									+"<button title='Devolver' class='dev ui teal icon button'><i class='large icon attach'></i></button>"
									+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
									+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
									+"<input type='hidden' name='id-prest' value='"+p[j][0]+"'/>"
								+"</td>"
								+"</tr>";
							};
					
					console.log(fDev);
									
					$(newRow).appendTo("#prestamos tbody");

					cnt++;
				}
				
			});
		};
	});
}