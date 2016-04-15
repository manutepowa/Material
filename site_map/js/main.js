$(document).ready(function(){

	var idmaterial = 1;
	var totalRows = 1;
	var presactual = 0;

	function o(debug){
 		console.log(debug);
 	}

	var addPrestamoReset = "<div class='ui relaxed divided list'>"
							+"<div class='item'>"
					          +"<table class='addper'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='per'>"
					                  +"<div class='ui icon input'>"
					                    +"<input id='persona' class='prompt' type='text' placeholder='Buscar Persona...'>"
					                    +"<i class='search icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large user big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay persona añadida</div>"
					                +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"

					  		+"</div>"

					  		+"<div class='item'>"
					          +"<table class='addlug'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='lug'>"
					                  +"<div class='ui icon input'>"
					                    +"<input id='lugar' class='prompt' type='text' placeholder='Buscar Lugar...'>"
					                    +"<i class='search icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large world big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay lugar añadido</div>"
					               +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"
					  		+"</div>"

					  		+"<div class='item'>"
					          +"<table class='adddate'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='dat'>"
					                  +"<div class='ui left icon input'>"
					                    +"<input type='date' placeholder='Fecha' id='date'>"
					                    +"<i class='calendar icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large calendar big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay fecha añadida</div>"
					                +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"
					  		+"</div>"

					        +"<div class='item'>"
					          +"<table class='addlistadomat'>"
					            +"<tr>"
					             +" <td>"
					               +"<div class='ui search medium' id='mat_0'>"
					                  +"<div class='ui icon input'>"
					                    +"<input id='material_0' name='material[]' class='prompt' type='text' placeholder='Buscar Material...'>"
					                    +"<i class='search icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large archive big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay material añadido</div>"
					                +"</div>"
					             +"</td>"
					              +"<td>"
					                +"<i id='addRowMat' class='add circle icon'></i>"
					              +"</td>"
					            +"</tr>"
					          +"</table>"
					        +"</div>"
					       +"</div>";

	var modPrestamoReset = "<div class='ui relaxed divided list'>"
							+"<div class='item'>"
					          +"<table class='modper'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='mper'>"
					                  +"<div class='ui icon input'>"
					                    +"<input id='mpersona' class='prompt' type='text' placeholder='Buscar Persona...'>"
					                    +"<i class='search icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large user big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay persona añadida</div>"
					                +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"

					  		+"</div>"

					  		+"<div class='item'>"
					          +"<table class='modlug'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='mlug'>"
					                  +"<div class='ui icon input'>"
					                    +"<input id='mlugar' class='prompt' type='text' placeholder='Buscar Lugar...'>"
					                    +"<i class='search icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large world big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay lugar añadido</div>"
					               +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"
					  		+"</div>"

					  		+"<div class='item'>"
					          +"<table class='moddate'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui search medium' id='dat'>"
					                  +"<div class='ui left icon input'>"
					                    +"<input type='date' placeholder='Fecha' id='mdate'>"
					                    +"<i class='calendar icon'></i>"
					                  +"</div>"
					                  +"<div class='results'></div>"
					                +"</div>"
					              +"</td>"
					              +"<td>"
					                +"<i class='large calendar big aligned icon icpres'></i>"
					              +"</td>"
					              +"<td>"
					                +"<div class='content'>"
					                  +"<div class='description'>No hay fecha añadida</div>"
					                +"</div>"
					              +"</td>"
					              +"<td></td>"
					            +"</tr>"
					          +"</table>"
					  		+"</div>"

					        // +"<div class='item'>"
					        //   +"<table class='modlistadomat'>"
					        //     +"<tr>"
					        //      +" <td>"
					        //        +"<div class='ui search medium' id='mmat'>"
					        //           +"<div class='ui icon input'>"
					        //             +"<input id='mmaterial_0' name='mmaterial[]' class='prompt' type='text' placeholder='Buscar Material...'>"
					        //             +"<i class='search icon'></i>"
					        //           +"</div>"
					        //           +"<div class='results'></div>"
					        //         +"</div>"
					        //       +"</td>"
					        //       +"<td>"
					        //         +"<i class='large archive big aligned icon icpres'></i>"
					        //       +"</td>"
					        //       +"<td>"
					        //         +"<div class='content'>"
					        //           +"<div class='description'>No hay material añadido</div>"
					        //         +"</div>"
					        //      +"</td>"
					        //       +"<td>"
					        //         +"<i id='maddRowMat' class='add circle icon'></i>"
					        //       +"</td>"
					        //     +"</tr>"
					        //   +"</table>"
					        // +"</div>"
					       +"</div>";

	$('.toggle').checkbox('set checked');

	$('.message').fadeOut(0);

	$('.message .close').on('click', function() {
	    $('.message').fadeOut(300);
	});

	// $('#op-modal').click(function(event) {
	$(document).on('click', '#op-modal', function(event) {
		$('.modal .message').fadeOut(0);
		$('#modal-add-prest')
			.modal({blurring:true})
			.modal('show')
		;
	});

	$(document).on('click', '.minus.circle.icon', function(event) {
		$(this).closest('.item').remove();
	});

	$(document).on('click', '#addRowMat', function(event) {
		// $(this).toggleClass('minus circle icon');
		// var prevMat = ;
		var allInputText = $('#modal-add-prest').find(':text');
		// alert(allInputText.length);
		var empty = 0;
		for(var i=2;i<allInputText.length;i++){
			if(allInputText[i].value==""){
				empty++;
			}
		}
		if(empty>0){
			alert("Rellene todas las líneas de material antes de añadir uno nuevo.");
			return false;
		}

		$(this).removeClass('add circle icon').addClass('minus circle icon');
		$(this).removeAttr('id');
		var newMat = "<div class='item'>"
				          +"<table class='addlistadomat'>"
				            +"<tr>"
				              +"<td>"
				                +"<div class='ui search medium' id='mat_"+idmaterial+"'>"
				                  +"<div class='ui icon input'>"
				                    +"<input id='material_"+idmaterial+"' name='material[]' class='prompt' type='text' placeholder='Buscar Material...'>"
				                    +"<i class='search icon'></i>"
				                  +"</div>"
				                  +"<div class='results'></div>"
				                +"</div>"
				              +"</td>"
				              +"<td>"
				                +"<i class='large archive big aligned icon icpres'></i>"
				              +"</td>"
				              +"<td>"
				                +"<div class='content'>"
				                  +"<div class='description'>No hay material añadido</div>"
				                +"</div>"
				              +"</td>"
				              +"<td>"
				                +"<i id='addRowMat' class='add circle icon'></i>"
				              +"</td>"
				            +"</tr>"
				          +"</table>"
				        +"</div>";
		$(newMat).appendTo('#modal-add-prest .ui.relaxed.divided.list');
		idmaterial++;
	});

	$(document).on('click', '#maddRowMat', function(event) {
		
		var empty = 0;
		var allInputText = $('#modal-mod-prest').find(':text');
		
		for(var i=2;i<allInputText.length;i++){
			if(allInputText[i].value==""){
				empty++;
			}
		}

		if(empty>0){
			alert("Rellene todas las líneas de material antes de añadir uno nuevo.");
			return false;
		}

		$(this).removeClass('add circle icon').addClass('minus circle icon');
		$(this).removeAttr('id');
		var newMat = "<div class='item'>"
				          +"<table class='maddlistadomat'>"
				            +"<tr>"
				              +"<td>"
				                +"<div class='ui search medium' id='mmat'>"
				                  +"<div class='ui icon input'>"
				                    +"<input id='mmaterial_"+presactual+"' name='mmaterial[]' class='prompt' type='text' placeholder='Buscar Material...'>"
				                    +"<i class='search icon'></i>"
				                  +"</div>"
				                  +"<div class='results'></div>"
				                +"</div>"
				              +"</td>"
				              +"<td>"
				                +"<i class='large archive big aligned icon icpres'></i>"
				              +"</td>"
				              +"<td>"
				                +"<div class='content'>"
				                  +"<div class='description'>No hay material añadido</div>"
				                +"</div>"
				              +"</td>"
				              +"<td>"
				                +"<i id='maddRowMat' class='add circle icon'></i>"
				              +"</td>"
				            +"</tr>"
				          +"</table>"
				        +"</div>";
		$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
	});

	$(document).on('click', '.results', function(){
		var desc = $(this).parents('tr').find('.description');
		var value = $(this).siblings('.input').find('input').val();
		o(value);
		desc.html(value);
	});

	$('input[type=date]').bind('change', function(event) {
		var desc = $(this).parents('tr').find('.description');
		desc.html('Prestado el: '+$(this).val());
	});

	// $('#addPrestamo').click(function(event) {
	$(document).on('click', '#addPrestamo', function(event) {
		// $('.modal .message').fadeOut(0);

		var persona = $('#persona').val();
		var lugar = $('#lugar').val();

		var allMat = $("input[name='material[]']");
		var material = [];
		o("numero materiales: "+allMat.length);
		for(var i=0;i<allMat.length;i++){
			material[i] = allMat[i].value
			o("material["+i+"]: "+allMat[i].value);
		}

		var date = $('#date').val();

		// o("Persona: "+persona+" | Lugar: "+lugar+" | Material: "+material+" | Fecha: "+date);
			
		if(persona == "" || lugar == "" || material == "" || date == ""){
			$('#erraddprescrear').fadeOut(0);
			$('#erraddpres').fadeIn(0);
			return false;
		}

		$.ajax({
			url: '../function/addPrestamo.php',
			type: 'POST',
			data: {'per': persona, 'lug': lugar, 'mat': material, 'dat': date},
			success: function(event){
				o("event: "+event);
				if(event == '1'){
					$('#advadd').fadeIn('500').delay(5000).fadeOut();
					$('#persona').val('');
					$('#lugar').val('');
					$('#material').val('');
					$('#date').val('');
				
					if($('.toggle').checkbox('is checked')){
						loadList(1);
					}
					else{
						loadList(0);
					}
					$('#modal-add-prest .ui.relaxed.divided.list').replaceWith(addPrestamoReset);
					idmaterial=1;
				}
				else if(event == '2'){
					o("Error material select");
				}
				else if(event == '3'){
					o("Error material insert");
				}
				else{
					$('.modal .message').fadeOut(0);
					$('#modal-add-prest').modal('show');
					$('#erraddprescrear').fadeIn(0);
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

	// $('#mat')
	//   .search({
	//     apiSettings: {
	//       url: '../function/getMaterial.php?q={query}'
	//     },
	//     fields: {
	//       results : '0',
	//       title   : '1'
	//     },
	//     minCharacters : 1,
	//     error : {
	//     	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addm">Crear material</button>'
	// 	},
	//   })
	// ;

	$('div[id ^= mat]')
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
	    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addmm">Crear material</button>'
		},
	  })
	;

	$('.modal .message').hide();

	//$('#modPrestamo').click(function(event) {
	$(document).on('click', '#modPrestamo', function(event) {
		// $('.modal .message').fadeOut(0);

		var mpersona = $('#mpersona').val();
		var mlugar = $('#mlugar').val();
		var mmaterial = $('#mmaterial').val();

		var allmMat = $("input[name='mmaterial[]']");
		var mmaterial = [];
		o("numero materiales: "+allmMat.length);
		for(var i=0;i<allmMat.length;i++){
			mmaterial[i] = allmMat[i].value
			o("mmaterial["+i+"]: "+allmMat[i].value);
		}

		var mdate = $('#mdate').val();

		// o("Persona: "+mpersona+" | Lugar: "+mlugar+" | Material: "+mmaterial+" | Fecha: "+mdate);

		if(mpersona == "" || mlugar == "" || mmaterial == "" || mdate == ""){
			$('#errmodprescrear').fadeOut(0);
			$('#errmodpres').fadeIn(0);
			return false;
		}

		o("Persona: "+mpersona+" | Lugar: "+mlugar+" | Material: "+mmaterial+" | Fecha: "+mdate);

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
				}
				else if(event == '2'){
					o("Error update material.prestamo");
				}
				else if(event == '3'){
					o("Error insert material.lineas_prestamo");
				}
				else if(event == '4'){
					o("Error delete material.lineas_prestamo");
				}
				else{
					$('.modal .message').fadeOut(0);
					$('#modal-mod-prest').modal('show');
					$('#errmodprescrear').fadeIn(0);
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
		    	noResults   : '<p class="center bold">Persona no encontrada.</p><button class="ui button teal add" id="addmp">Crear persona</button>'
			},
		  })
		;

	$('div[id ^= mmat]')
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
	    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addmm">Crear material</button>'
		},
	  })
	;
// // $('div[id ^= item]')
// 	$(document).on('click', 'div[id ^= mmat]', function(event) {
// 		o("es un mmat :DD");
// 	});

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
	    	noResults   : '<p class="center bold">Lugar no encontrado.</p><button class="ui button teal add" id="addml">Crear lugar</button>'
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
		$('.modal .message').fadeOut(0);
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
		o("id:"+id);
		var dataRow = $(this).parent().parent(); 

		var urlmatprestamo = '../function/getLineasPrestamo.php?q='+id;

		$('#modal-mod-prest .ui.relaxed.divided.list').replaceWith(modPrestamoReset);

		var cnt = 0;
		var error_field = 0;
		presactual = 0;
		//var estructura = "";
		$.getJSON(urlmatprestamo, function(mat){

			$.each(mat, function(i, p){
				for(var j=0; j<p.length; j++){
					if(presactual==0){
						var newMat = "<div class='item'>"
							          +"<table class='maddlistadomat'>"
							            +"<tr>"
							              +"<td>"
							                +"<div class='ui search medium' id='mmat'>"
							                  +"<div class='ui icon input'>"
							                    +"<input id='mmaterial_"+presactual+"' name='mmaterial[]' data-idmat='"+p[j][0]+"' value='"+p[j][1]+"' class='prompt' type='text' placeholder='Buscar Material...'>"
							                    +"<i class='search icon'></i>"
							                  +"</div>"
							                  +"<div class='results'></div>"
							                +"</div>"
							              +"</td>"
							              +"<td>"
							                +"<i class='large archive big aligned icon icpres'></i>"
							              +"</td>"
							              +"<td>"
							                +"<div class='content'>"
							                  +"<div class='description'>No hay material añadido</div>"
							                +"</div>"
							              +"</td>"
							              +"<td>"
							                +"<i id='maddRowMat' class='add circle icon'></i>"
							              +"</td>"
							            +"</tr>"
							          +"</table>"
							        +"</div>";
						$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
						//estructura+=newMat;
						presactual++;

						for(var k=0; k<2; k++){
							o("mat["+j+"]["+k+"]: "+p[j][k]);
						}
					}
					else{
						$('#maddRowMat').removeClass('add circle icon').addClass('minus circle icon');
						$('#maddRowMat').removeAttr('id');
						var newMat = "<div class='item'>"
								          +"<table class='maddlistadomat'>"
								            +"<tr>"
								              +"<td>"
								                +"<div class='ui search medium' id='mmat'>"
								                  +"<div class='ui icon input'>"
								                    +"<input id='mmaterial_"+presactual+"' name='mmaterial[]' data-idmat='"+p[j][0]+"' value='"+p[j][1]+"' class='prompt' type='text' placeholder='Buscar Material...'>"
								                    +"<i class='search icon'></i>"
								                  +"</div>"
								                  +"<div class='results'></div>"
								                +"</div>"
								              +"</td>"
								              +"<td>"
								                +"<i class='large archive big aligned icon icpres'></i>"
								              +"</td>"
								              +"<td>"
								                +"<div class='content'>"
								                  +"<div class='description'>No hay material añadido</div>"
								                +"</div>"
								              +"</td>"
								              +"<td>"
								                +"<i id='maddRowMat' class='add circle icon'></i>"
								              +"</td>"
								            +"</tr>"
								          +"</table>"
								        +"</div>";
						$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
						//estructura+=newMat;
						presactual++;

						for(var k=0; k<2; k++){
							o("mat["+j+"]["+k+"]: "+p[j][k]);
						}
					}
				}
				
			});
			// o(estructura);
			// $(estructura).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
			// presactual=1;
		});
				
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

		totalRows = 1;
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
		$('.modal .message').fadeOut(0);
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
		// var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addPerson.php',
			type: 'POST',
			data: {'nombre': valor},
			success: function(event){
				if(event != '1'){alert("¡Error al añadir la nueva persona!"); return false;}
				// modal.modal('hide');
				$('#persona').focus();
				$('#mpersona').focus();
			}
		});
	
	});

	$(document).on('click', '#addm, #addmm', function(event) {
		event.preventDefault();
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		// var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addMaterial.php',
			type: 'POST',
			data: {'descripcion': valor},
			success: function(event){
				if(event != '1'){alert("¡Error al añadir el nuevo material!"); return false;}
				// modal.modal('hide');
				$('#material').focus();
				$('#mmaterial').focus();
			}
		});
	
	});

	$(document).on('click', '#addl, #addml', function(event) {
		event.preventDefault();
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		// var modal = $(this).parents('.modal');

		$.ajax({
			url: '../function/addLugar.php',
			type: 'POST',
			data: {'lugar': valor},
			success: function(event){
				if(event != '1'){alert("¡Error al añadir el nuevo lugar!"); return false;}
				// modal.modal('hide');
				$('#lugar').focus();
				$('#mlugar').focus();
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
	var presactual = 0;

	$.getJSON(urlprestamo, function(prest){
		
		for (var j = 0; j < urlprestamo.length; j++) {

			$.each(prest, function(i, p){
				
				if(cnt != p.length){

					if(j==0){

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
						$(newRow).appendTo("#prestamos tbody");
					}

					else{

						if(p[j][0]==p[j-1][0]){

							$("tr[data-value='" + p[j-1][0] + "']>td:first").append(" | "+p[j][1]);
						}

						else{
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

							$(newRow).appendTo("#prestamos tbody");
						}
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay préstamos que cumplan con las características indicadas.</td></tr>";
			$(newRow).appendTo("#prestamos tbody");
		}
	});
}