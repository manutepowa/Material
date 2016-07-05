$(document).ready(function(){

	var id;
	var idmaterial = 1;
	var totalRows = 1;
	var presactual = 0;

	function o(debug){
 		console.log(debug);
 	}

	var addPrestamoReset = "<div class='item'>"
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
					        +"</div>";
						/*"<div class='ui relaxed divided list'>"
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
					       +"</div>";*/

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

					  		// +"<div class='item'>"
					    //       +"<table class='moddate'>"
					    //         +"<tr>"
					    //           +"<td>"
					    //             +"<div class='ui search medium' id='dat'>"
					    //               +"<div class='ui left icon input'>"
					    //                 +"<input type='date' placeholder='Fecha' id='mdate'>"
					    //                 +"<i class='calendar icon'></i>"
					    //               +"</div>"
					    //               +"<div class='results'></div>"
					    //             +"</div>"
					    //           +"</td>"
					    //           +"<td>"
					    //             +"<i class='large calendar big aligned icon icpres'></i>"
					    //           +"</td>"
					    //           +"<td>"
					    //             +"<div class='content'>"
					    //               +"<div class='description'>No hay fecha añadida</div>"
					    //             +"</div>"
					    //           +"</td>"
					    //           +"<td></td>"
					    //         +"</tr>"
					    //       +"</table>"
					  		// +"</div>"
					    //    +"</div>";

					    	+"<div class='item'>"
					          +"<table class='moddate'>"
					            +"<tr>"
					              +"<td>"
					                +"<div class='ui input'>"
						                +"<input type='date' id='mdate'>"
						                +"<input type='time' id='mtime'>"
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
						  		+"<div class='ui form'>"
							        +"<div class='field'>"
									    +"<textarea id='mobser' placeholder='Observaciones...' rows='2'></textarea>"
									+"</div>"
								+"</div>"
							+"</div>"
						  +"</div>";

	$('.toggle').checkbox('set checked');

	$('#advadd > .close.icon, #advmod > .close.icon, #advdev > .close.icon, #advdel > .close.icon, #advaddpre > .close.icon, #advaddmat > .close.icon, #advaddper > .close.icon, #advaddlug > .close.icon, #advaddusu > .close.icon').on('click', function() {
	    $(this).closest('.ui.positive.message').hide();
	});

	$('#erraddpres > .close.icon, #erraddprescrear > .close.icon, #errmodpres > .close.icon, #errmodprescrear > .close.icon, #erraddusu > .close.icon, #erraddusupass > .close.icon').on('click', function() {
	    $(this).closest('.ui.negative.message').hide();
	});

	$('.toggle').change(function() {
		$('.filtro input:text').val('');
		if($(this).checkbox('is checked')){
			loadList(1);
		}
		else{
			loadList(0);
		}
	});

	function changetoggle(){
		if($('.toggle').checkbox('is checked')){
			loadList(1);
		}
		else{
			loadList(0);
		}
	}

	changetoggle();

	$(document).on('click', '.minus.circle.icon', function(event) {

		var padre = $(this).closest('table[class ^= addlistadomat]').parent('.item');
		var contenedor = $(this).closest('.description');

		if(padre.is(':last-child')){
			$(this).closest('.item').remove();
			$ultimo = contenedor.find('.item:last');
			$icono = $ultimo.find('.circle');
			
			if(padre.find('table[class ^= addlistadomat]')[0].className=="addlistadomatm"){
				$icono.removeClass('minus circle icon').addClass('add circle icon').attr('id','maddRowMat');
			}
			else{
				$icono.removeClass('minus circle icon').addClass('add circle icon').attr('id','addRowMat');
			}
			
			if(!$ultimo.is(':nth-child(5)')){
				$ultimo.find('td:last-child').append('<i class="minus circle icon"></i>');
			}
		}
		else{
			$ultimo = contenedor.find('.item:last');
			if(!$ultimo.is(':nth-child(5)')){
				$(this).closest('.item').remove();
				if($ultimo.is(':nth-child(5)')){
					$icono = $ultimo.find('.minus.circle.icon');
					$icono.remove();
				}
			}
		}
	});

	$(document).on('click', '#addRowMat', function(event) {
		
		var allInputText = $('#modal-add-prest').find(':text');
		
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

		var padre = $(this).closest('.addlistadomat').parent('.item');
		if(padre.is(':nth-child(5)')){
			$(this).removeClass('add circle icon').addClass('minus circle icon');
		}
		else{
			$(this).remove();
		}
		
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
				                +"<i id='addRowMat' class='add circle icon'></i><i class='minus circle icon'></i>"
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

		var padre = $(this).closest('.addlistadomatm').parent('.item');
		if(padre.is(':nth-child(5)')){
			$(this).removeClass('add circle icon').addClass('minus circle icon');
		}
		else{
			$(this).remove();
		}

		$(this).removeAttr('id');
		var newMat = "<div class='item'>"
				          +"<table class='addlistadomatm'>"
				            +"<tr>"
				              +"<td>"
				                +"<div class='ui search medium' id='mmat_"+presactual+"'>"
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
				                +"<i id='maddRowMat' class='add circle icon'></i><i class='minus circle icon'></i>"
				              +"</td>"
				            +"</tr>"
				          +"</table>"
				        +"</div>";
		$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
	});

	$(document).on('click', '.results', function(){
		var desc = $(this).parents('tr').find('.description');
		var value = $(this).siblings('.input').find('input').val();
		desc.html(value);
	});

	$('.ui.accordion')
  .accordion('refresh')
;

// 	function (event) {
//     if (event.which == 13 || event.keyCode == 13) {
//         //code to execute here
//         return false;
//     }
//     return true;
// };

	$(document).on('change', 'input[type=date]', function(){
		var desc = $(this).parents('tr').find('.description');
		var time = $(this).siblings('input[type=time]').val();
		if(time == ""){
			desc.html('Prestado el '+dateToString($(this).val()));
		}
		else{
			desc.html('Prestado el '+dateToString($(this).val())+' a las '+time);
		}
	});

	$(document).on('change', 'input[type=time]', function(){
		var desc = $(this).parents('tr').find('.description');
		var date = $(this).siblings('input[type=date]').val();
		if($(this).val() == ""){
			desc.html('Prestado el '+dateToString(date));
		}
		else{
			desc.html('Prestado el '+dateToString(date)+' a las '+$(this).val());
		}
	});

	$('#per')
	  .search({
	    apiSettings: {
	      url: '../function/getPerson.php?q={query}'
	    },
	    fields: {
	      results : 'personas',
	      title   : 'nombre'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : '<p class="center bold">Persona no encontrada.</p><button class="ui button teal add" id="addp">Crear persona</button>',
	    	serverError : '<p class="center bold">Cargando . . .</p>'
		}
	  })
	;

	$('#lug')
	  .search({
	    apiSettings: {
	      url: '../function/getLugar.php?q={query}'
	    },
	    fields: {
	      results : 'lugares',
	      title   : 'lugar'
	    },
	    minCharacters : 1,
	    error : {
	    	noResults   : '<p class="center bold">Lugar no encontrado.</p><button class="ui button teal add" id="addl">Crear lugar</button>',
	    	serverError : '<p class="center bold">Cargando . . .</p>'
		}
	  })
	;

	$(document).on('keyup','div[id ^= mat]',function(){
		$(this)
		  .search({
		    apiSettings: {
		      url: '../function/getMaterial.php?q={query}'
		    },
		    fields: {
		      results : 'materiales',
		      title   : 'descripcion'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addm">Crear material</button>',
		    	serverError : '<p class="center bold">Cargando . . .</p>'
			}
		  })
		;
	});

	$(document).on('keyup','#mper',function(){
		$(this)
		  .search({
		    apiSettings: {
		      url: '../function/getPerson.php?q={query}'
		    },
		    fields: {
		      results : 'personas',
		      title   : 'nombre'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : '<p class="center bold">Persona no encontrada.</p><button class="ui button teal add" id="addmp">Crear persona</button>',
		    	serverError : '<p class="center bold">Cargando . . .</p>'
			}
		  })
		;
	});

	$(document).on('keyup','#mlug',function(){
		$(this)
		  .search({
		    apiSettings: {
		      url: '../function/getLugar.php?q={query}'
		    },
		    fields: {
		      results : 'lugares',
		      title   : 'lugar'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : '<p class="center bold">Lugar no encontrado.</p><button class="ui button teal add" id="addml">Crear lugar</button>',
		    	serverError : '<p class="center bold">Cargando . . .</p>'
			}
		  })
		;
	});

	$(document).on('keyup','div[id ^= mmat]',function(){
		$(this)
		  .search({
		    apiSettings: {
		      url: '../function/getMaterial.php?q={query}'
		    },
		    fields: {
		      results : 'materiales',
		      title   : 'descripcion'
		    },
		    minCharacters : 1,
		    error : {
		    	noResults   : '<p class="center bold">Material no encontrado.</p><button class="ui button teal add" id="addmm">Crear material</button>',
		    	serverError : '<p class="center bold">Cargando . . .</p>'
			}
		  })
		;
	});

	$(document).on('click', '#op-modal', function(event) {

		$('#erraddpres').fadeOut(0);
		$('#erraddprescrear').fadeOut(0);
		
		$('#modal-add-prest')
			.modal({
				blurring: true,
				onApprove : function() {
					var nomaterial = 0;
					var persona = $('#persona').val();
					var lugar = $('#lugar').val();

					var allMat = $("input[name='material[]']");
					var material = [];
					
					for(var i=0;i<allMat.length;i++){
						material[i] = allMat[i].value;
						if(material[i]==""){nomaterial++;}
						o("material["+i+"]: "+allMat[i].value);
					}

					var date = $('#date').val();
					var time = $('#time').val();
					var user = $('#op-modal').data('user');
					var obser = $('#obser').val();

					o(user);

				    if(persona == "" || lugar == "" || nomaterial != 0 || date == "" || time == ""){
						$('#erraddprescrear').fadeOut(0);
						$('#erraddpres').fadeIn(0);
						
						return false;
					}

					else{
						
						$.ajax({
							url: '../function/addPrestamo.php',
							type: 'POST',
							data: {'per': persona, 'lug': lugar, 'mat': material, 'dat': date, 'time': time, 'user': user, 'obser': obser},
							success: function(event){
								
								if(event == '1'){
									
									$('#advadd').css('display','block');
									$('#advadd').css('visibility','visible');
									$('#advadd').delay(5000).queue(function (next){ 
										$(this).css('visibility', 'hidden'); 
										next();
									});
									$('#persona').val('');
									$('#lugar').val('');
									$('#obser').val('');
									$('#date').val('');
									$('#time').val('');
								
									changetoggle();

									var count = $("#modal-add-prest .item").length;

									$("#modal-add-prest .item:nth-child(1)").find('.description').text("No hay persona añadida");
									$("#modal-add-prest .item:nth-child(2)").find('.description').text("No hay lugar añadido");
									$("#modal-add-prest .item:nth-child(3)").find('.description').text("No hay fecha añadida");
									
									for(i=5;i<=count;i++){
										$("#modal-add-prest .item:last-child").remove();
									}

									$('#modal-add-prest .ui.relaxed.divided.list').append(addPrestamoReset);

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
					}

				}
			})
			.modal('show')
		;
	});

	$(document).on('click', '.mod', function(event) {
		event.preventDefault();

		id = $(this).parent().parent().siblings('input').val();

		presactual = id;

		var dataRow = $(this).parent().parent().parent().parent(); 

		var urlmatprestamo = '../function/getLineasPrestamo.php?q='+id;

		$('#modal-mod-prest .ui.relaxed.divided.list').replaceWith(modPrestamoReset);

		var error_field = 0;
		var cnt = 0;
		
		$.getJSON(urlmatprestamo, function(mat){

			$.each(mat, function(i, p){
				
				if(i==0){
					var newMat = "<div class='item'>"
						          +"<table class='addlistadomatm'>"
						            +"<tr>"
						              +"<td>"
						                +"<div class='ui search medium' id='mmat_"+i+"'>"
						                  +"<div class='ui icon input'>"
						                    +"<input id='mmaterial_"+i+"' name='mmaterial[]' data-idmat='"+p.id_material+"' value='"+p.descripcion+"' class='prompt' type='text' placeholder='Buscar Material...'>"
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
						                +"<i id='maddRowMat' class='add circle icon'></i><i class='minus circle icon'></i>"
						              +"</td>"
						            +"</tr>"
						          +"</table>"
						        +"</div>";
					$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
				}
				else{
					$('#maddRowMat').remove();
					var newMat = "<div class='item'>"
						          +"<table class='addlistadomatm'>"
						            +"<tr>"
						              +"<td>"
						                +"<div class='ui search medium' id='mmat_"+i+"'>"
						                  +"<div class='ui icon input'>"
						                    +"<input id='mmaterial_"+i+"' name='mmaterial[]' data-idmat='"+p.id_material+"' value='"+p.descripcion+"' class='prompt' type='text' placeholder='Buscar Material...'>"
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
						                +"<i id='maddRowMat' class='add circle icon'></i><i class='minus circle icon'></i>"
						              +"</td>"
						            +"</tr>"
						          +"</table>"
						        +"</div>";
					$(newMat).appendTo('#modal-mod-prest .ui.relaxed.divided.list');
				}
				$('#mmaterial_'+i).parents('table').find('.description').html(p.descripcion);
				cnt++;
			});
			if(cnt == 1){
				$('.minus.circle.icon').remove();
			}
		});
				
		var observacionesMod = dataRow.children('td').eq(0).find('i').data('content');
		var usuarioMod = dataRow.children('td').eq(0).find('i').data('user');
		var materialMod = dataRow.children('td').eq(1).text();
		var nombreMod = dataRow.children('td').eq(2).text();
		var lugarMod = dataRow.children('td').eq(3).text();
		var ftprestamoMod = dataRow.children('td').eq(4).text();

		var fprestamoMod = stringToDate(ftprestamoMod.substring(0,10));
		var tprestamoMod = ftprestamoMod.substring(17,23);

		$('.modal .message').fadeOut(0);

		$('#modal-mod-prest').find('#mpersona').val(nombreMod);
		$('#modal-mod-prest').find('#mlugar').val(lugarMod);
		$('#modal-mod-prest').find('#mdate').val(fprestamoMod);
		$('#modal-mod-prest').find('#mtime').val(tprestamoMod);
		$('#modal-mod-prest').find('#mobser').val(observacionesMod);

		$('#mpersona').parents('tr').find('.description').html(nombreMod);
		$('#mlugar').parents('tr').find('.description').html(lugarMod);
		$('#mdate').parents('tr').find('.description').html('Prestado el '+dateToString(fprestamoMod)+' a las '+tprestamoMod);

		$('#modal-mod-prest')
			.modal({
				blurring: true,
				onApprove : function() {

					var nommaterial = 0;
					var mpersona = $('#mpersona').val();
					var mlugar = $('#mlugar').val();
					
					var allmMat = $("input[name='mmaterial[]']");
					var mmaterial = [];
					
					for(var i=0;i<allmMat.length;i++){
						mmaterial[i] = allmMat[i].value;
						if(mmaterial[i]==""){o("nommaterial: "+nommaterial);nommaterial++;}
					}

					var mdate = $('#mdate').val();
					var mtime = $('#mtime').val();
					var muser = usuarioMod;
					var mobser = $('#mobser').val();
					
					if(mpersona == "" || mlugar == "" || nommaterial != 0 || mdate == "" || mtime == ""){
						$('#errmodprescrear').fadeOut(0);
						$('#errmodpres').fadeIn(0);

						return false;
					}

					else{

						$.ajax({
							url: '../function/modPrestamo.php',
							type: 'POST',
							data: {'per': mpersona, 'lug': mlugar, 'mat': mmaterial, 'dat': mdate, 'time': mtime, 'user': muser, 'obser': mobser, 'id-prest':id},
							success: function(event){
								console.log(event);
								if(event == '1'){
									$('#advmod').css('display','block');
									$('#advmod').css('visibility','visible');
									$('#advmod').delay(5000).queue(function (next){ 
										$(this).css('visibility', 'hidden'); 
										next();
									});

									changetoggle();

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
									o("error ajax ("+event+")");
									$('.modal .message').fadeOut(0);
									$('#modal-mod-prest').modal('show');
									$('#errmodprescrear').fadeIn(0);
								}
							}
						});

					}
				}
			})
			.modal('show')
		;

		totalRows = 1;
	});

	$(document).on('click', '.dev', function(event) {
		event.preventDefault();
		$('.modal .message').fadeOut(0);
		id = $(this).parent().parent().siblings('input').val();
		// o(id);
		$('#mod-dev').modal('show');
	});

	$(document).on('click', '.del', function(event) {
		event.preventDefault();
		id = $(this).parent().parent().siblings('input').val();
		// o(id);
		$('#mod-del').modal('show');
	});

	$(document).on('click', '#actual-date', function(event){
		event.preventDefault();

		var d = new Date();
		var  month = d.getMonth()+1;
		var date = d.getFullYear()+'-'+month+'-'+d.getDate();
		var time = d.getHours()+":"+d.getMinutes();

		$.ajax({
			url: '../function/addDevolucion.php',
			type: 'POST',
			data: {'dat-dev': date, 'time-dev': time, 'id-prest':id}
		}).done(function(){
			
			$('#advdev').css('display','block');
			$('#advdev').css('visibility','visible');
			$('#advdev').delay(5000).queue(function (next){ 
				$(this).css('visibility', 'hidden'); 
				next();
			});

			$('#mod-dev').modal('hide');

			changetoggle();
		});
	});

	$(document).on('change', 'input[name$="dat-dev"]', function(event) {
		$('.modal .message').fadeOut(0);
	});

	$(document).on('click', '#date-select', function(event) {
		event.preventDefault();

		var date = $(this).siblings('input[type=date]').val();
		var time = $(this).siblings('input[type=time]').val();
		
		if(date == "" || time == ""){
			$('#errdevpres').fadeIn(0);
			return false;
		}

		$.ajax({
			url: '../function/addDevolucion.php',
			type: 'POST',
			data: {'dat-dev': date, 'time-dev': time, 'id-prest':id}
		}).done(function(){
			
			$('#advdev').css('display','block');
			$('#advdev').css('visibility','visible');
			$('#advdev').delay(5000).queue(function (next){ 
				$(this).css('visibility', 'hidden'); 
				next();
			});
			$('#mod-dev').modal('hide');

			changetoggle();
		});
		$(this).siblings('input[type=date]').val("");
		$(this).siblings('input[type=time]').val("");
	});

	$(document).on('click', '.approve', function(event) {
		event.preventDefault();
		$.ajax({
			url: '../function/delPrestamo.php',
			type: 'POST',
			data: {'id-prest': id}
		}).done(function(){

			changetoggle();

			$('#advdel').css('display','block');
			$('#advdel').css('visibility','visible');
			$('#advdel').delay(5000).queue(function (next){ 
				$(this).css('visibility', 'hidden'); 
				next();
			});
		});
	});

	$(document).on('click', '#addp, #addmp', function(event) {
		event.preventDefault();

		$('#per').search('clear cache');
		$('#mper').search('clear cache');
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		
		$.ajax({
			url: '../function/addPerson.php',
			type: 'POST',
			data: {'nombre': valor},
			success: function(event){
				if(event != '1'){alert("¡Error al añadir la nueva persona!"); return false;}
				
				$('#persona').focus(); //antes habia #persona
				$('#mpersona').focus();
			}
		});
	});

	$(document).on('click', '#addm, #addmm', function(event) {
		event.preventDefault();

		$('div[id ^= mat]').search('clear cache');
		$('div[id ^= mmat]').search('clear cache');
		
		var inputaddm = $(this).parents('div[id ^= mat_]').find('input[id ^= material_]');
		var inputmodm = $(this).parents('div[id ^= mmat_]').find('input[id ^= mmaterial_]');
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();

		$.ajax({
			url: '../function/addMaterial.php',
			type: 'POST',
			data: {'descripcion': valor},
			success: function(event){
				if(event != '1'){alert("¡Error al añadir el nuevo material!"); return false;}
				$(inputaddm).focus();
				$(inputmodm).focus();
			}
		});
	});

	$(document).on('click', '#addl, #addml', function(event) {
		event.preventDefault();

		$('#lug').search('clear cache');
		$('#mlug').search('clear cache');
		
		var valor = $(this).parents('.results').siblings('.icon.input').find('.prompt').val();
		
		$.ajax({
			url: '../function/addLugar.php',
			type: 'POST',
			data: {'lugar': valor},
			beforeSend: Loader2,
			success: function(event){
				if(event != '1'){alert("¡Error al añadir el nuevo lugar!"); return false;}
				
				$('#lugar').focus();
				$('#mlugar').focus();
			}
		});
	});

	$('#addusuario_segment .success.message').hide();

	$('#addusuario').submit(function() {

		// $('#addusuario_segment .success.message').show();

		return false;
	});

	$('#erraddusu').fadeOut(0);
	$('#erraddusupass').fadeOut(0);

	$('#addusuario').form({ 
		onSuccess: function() {

			$('#erraddusu').fadeOut(0);
			$('#erraddusupass').fadeOut(0);

			// console.log("onSuccess");
			
			var usuario = $('#addusuario').find('input[name="usuario"]').val();
			var contrasena = $('#addusuario').find('input[name="contrasena"]').val();
			var repcontrasena = $('#addusuario').find('input[name="repcontrasena"]').val();
			var privilegios = $('#addusuario').find('select[name="privilegios"]').val();

		    if(usuario == "" || contrasena == "" || repcontrasena == "" || privilegios == ""){
				$('#erraddusu').fadeIn(0);
				console.log("onSuccess if");
				return false;
			}

			else if(repcontrasena != contrasena){
				$('#erraddusupass').fadeIn(0);
				console.log("onSuccess else if");
				return false;
			}

			else{
				
				console.log("onSuccess else");
				$.ajax({
					url: '../function/addUsuario.php',
					type: 'POST',
					data: {'usuario': usuario, 'privilegios': privilegios, 'contrasena': contrasena},
					beforeSend: Loader2,
					// data: {'per': persona, 'lug': lugar, 'mat': material, 'dat': date, 'time': time, 'user': user, 'obser': obser},
					success: function(event){
						
						if(event == '1'){
							
							$('#advaddusu').css('display','block');
							$('#advaddusu').css('visibility','visible');
							$('#advaddusu').delay(5000).queue(function (next){ 
								$(this).css('visibility', 'hidden'); 
								next();
							});

							$('#addusuario').find('input[name="usuario"]').val('');
							$('#addusuario').find('input[name="contrasena"]').val('');
							$('#addusuario').find('input[name="repcontrasena"]').val('');

							$('.ui.dropdown.selection').find('.text').addClass('default');
							$('.ui.dropdown.selection').find('.text.default').html('Seleccionar privilegios');
							$('.ui.dropdown.selection').find('.item.active.selected').removeClass('active selected');

							$('#addusuario_segment').hide();
							$('#usuarios_segment').show();

							$('#loader2').css('display','none');
							$('#prestamos').css('visibility','visible');
						}
						else{
							console.log("ERROR AL AÑADIR UN NUEVO USUARIO");
							// $('.modal .message').fadeOut(0);
							// $('#modal-add-prest').modal('show');
							// $('#erraddprescrear').fadeIn(0);
						}
					}

				});
			}

		}
	
	});

	/*function submitForm() {

		var usuario = $('#addusuario').find('input[name="usuario"]').val();
		var contrasena = $('#addusuario').find('input[name="contrasena"]').val();
		var privilegios = $('#addusuario').find('select[name="privilegios"]').val();

		$.ajax({
			type: 'POST', 
			url: '../function/addUsuario.php', 
			data: {'usuario': usuario, 'privilegios': privilegios, 'contrasena': contrasena}, 
			success: onFormSubmitted 
		});
	}

	// Handle post response
	function onFormSubmitted(response) {
		// Do something with response ...
		console.log("Prestamo añadido");
		$('#addusuario_segment .success.message').show();
	}*/

});

function dateToString(date){

	var string;
	var d, m, y;

	y = date.substring(0,4);
	m = date.substring(5,7);
	d = date.substring(8,10);

	string = d+"/"+m+"/"+y;

	return string;
}

function stringToDate(string){
	
	var date;
	var ds, ms, ys;

	ds = string.substring(0,2);
	ms = string.substring(3,5);
	ys = string.substring(6,10);

	date = ys+"-"+ms+"-"+ds;

	return date;
}

function loadList(q){
	var urlprestamo = '../function/getPrestamo.php?q='+q;

	$("#prestamos tbody").html("");

	var error_field = 0;
	var fechaprest;
	var horaprest;
	var fechadev;
	var horadev;

	$.ajax({
		url: urlprestamo,
		beforeSend: Loader2
	})
	.done(function(event){

		var prest = $.parseJSON(event);

		if(prest.length == 0){
			var newRow = "<tr class='center'><td colspan='7'>No hay préstamos que cumplan con las características indicadas.</td></tr>";
			$(newRow).appendTo("#prestamos tbody");
		}
		else{
			$.each(prest, function(i, p){
				
				fechaprest = dateToString(p.fecha_prestamo.substring(0,10));
				horaprest = p.fecha_prestamo.substring(11,16);
				
				if(i==0){
					
					var fDev;

					if(p.fecha_devolucion){
						fechadev = dateToString(p.fecha_devolucion.substring(0,10));
						horadev = p.fecha_devolucion.substring(11,16);
						fDev = fechadev+" a las "+horadev;
					}
					else{
						fDev="No devuelto";
						error_field = 1;
					}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_prestamo+"'>";
						error_field = 0;
					}

					else{
						var newRow = "<tr data-value='"+p.id_prestamo+"'>";
					}

					newRow += 	"<td><i class='large info circle icon' data-user='"+p.id_usuario+"' data-title='Dado de alta por: "+p.nombre_usuario+"' data-content='"+p.observaciones+"' data-variation='inverted very wide'></i></td>"
								+"<td>"+p.descripcion+"</td>"
								+"<td>"+p.nombre+"</td>"
								+"<td>"+p.lugar+"</td>"
								+"<td>"+fechaprest+" a las "+horaprest+"</td>"
								+"<td>"+fDev+"</td>";
							if (fDev !== 'No devuelto') {
								// newRow +=	"<td style='text-align:center'>"
								// 	+"<button title='Devolver' class='dev ui teal icon button' disabled><i class='large icon checked calendar'></i></button>"
								// 	+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
								// 	+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
								// 	+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
								// +"</td>"
								// +"</tr>";

								newRow +=  "<td style='text-align:center'>"
												+"<div class='ui icon top left pointing dropdown button'>"
												  +"<i class='setting icon'></i>"
												  +"<div class='menu'>"
												    +"<div class='dev disabled item'><i class='checked calendar icon'></i>Devolver</div>"
												    +"<div class='mod item'><i class='edit icon'></i>Modificar</div>"
												    +"<div class='del item'><i class='trash icon'></i>Eliminar</div>"
												  +"</div>"
												+"</div>"
												+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
											+"</td>"
										  +"</tr>";
							}
							else{
								// newRow +=	"<td style='text-align:center'>"
								// 	+"<button title='Devolver' class='dev ui teal icon button'><i class='large icon checked calendar'></i></button>"
								// 	+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
								// 	+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
								// 	+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
								// +"</td>"
								// +"</tr>";
								newRow +=  "<td style='text-align:center'>"
												+"<div class='ui icon top left pointing dropdown button'>"
												  +"<i class='setting icon'></i>"
												  +"<div class='menu'>"
												    +"<div class='dev item'><i class='checked calendar icon'></i>Devolver</div>"
												    +"<div class='mod item'><i class='edit icon'></i>Modificar</div>"
												    +"<div class='del item'><i class='trash icon'></i>Eliminar</div>"
												  +"</div>"
												+"</div>"
												+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
											+"</td>"
										  +"</tr>";
							};
					$(newRow).appendTo("#prestamos tbody");
				}

				else{
					if(p.id_prestamo==prest[i-1].id_prestamo){

						$("tr[data-value='" + prest[i-1].id_prestamo + "']>td:nth-child(2)").append(" &nbsp;<strong>||</strong>&nbsp; "+p.descripcion);
					}

					else{
						var fDev;
						if(p.fecha_devolucion){
							fechadev = dateToString(p.fecha_devolucion.substring(0,10));
							horadev = p.fecha_devolucion.substring(11,16);
							fDev = fechadev+" a las "+horadev;
						}
						else{
							fDev="No devuelto";
							error_field = 1;
						}

						if(error_field == 1){
							var newRow = "<tr class='negative' data-value='"+p.id_prestamo+"'>";

							error_field = 0;
						}

						else{
							var newRow = "<tr data-value='"+p.id_prestamo+"'>";
						}

						newRow += 	"<td><i class='large info circle icon' data-user='"+p.id_usuario+"' data-title='Dado de alta por: "+p.nombre_usuario+"' data-content='"+p.observaciones+"' data-variation='inverted very wide'></i></td>"
						// newRow += 	"<td><i class='large info circle icon' data-content='"+p.observaciones+" y mas cosas' data-variation='inverted very wide'></i></td>"
									+"<td>"+p.descripcion+"</td>"
									+"<td>"+p.nombre+"</td>"
									+"<td>"+p.lugar+"</td>"
									+"<td>"+fechaprest+" a las "+horaprest+"</td>"
									+"<td>"+fDev+"</td>";
								if (fDev !== 'No devuelto') {
									// newRow +=	"<td style='text-align:center'>"
									// 	+"<button title='Devolver' class='dev ui teal icon button' disabled><i class='large icon checked calendar'></i></button>"
									// 	+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
									// 	+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
									// 	+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
									// +"</td>"
									// +"</tr>";
									newRow +=  "<td style='text-align:center'>"
												+"<div class='ui icon top left pointing dropdown button'>"
												  +"<i class='setting icon'></i>"
												  +"<div class='menu'>"
												    +"<div class='dev disabled item'><i class='checked calendar icon'></i>Devolver</div>"
												    +"<div class='mod item'><i class='edit icon'></i>Modificar</div>"
												    +"<div class='del item'><i class='trash icon'></i>Eliminar</div>"
												  +"</div>"
												+"</div>"
												+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
											+"</td>"
										  +"</tr>";
								}
								else{
									// newRow +=	"<td style='text-align:center'>"
									// 	+"<button title='Devolver' class='dev ui teal icon button'><i class='large icon checked calendar'></i></button>"
									// 	+"<button title='Modificar' class='mod ui icon button'><i class='large icon edit'></i></button>"
									// 	+"<button title='Borrar' class='del ui icon button'><i class='large icon trash'></i></button>"
									// 	+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
									// +"</td>"
									// +"</tr>";
									newRow +=  "<td style='text-align:center'>"
												+"<div class='ui icon top left pointing dropdown button'>"
												  +"<i class='setting icon'></i>"
												  +"<div class='menu'>"
												    +"<div class='dev item'><i class='checked calendar icon'></i>Devolver</div>"
												    +"<div class='mod item'><i class='edit icon'></i>Modificar</div>"
												    +"<div class='del item'><i class='trash icon'></i>Eliminar</div>"
												  +"</div>"
												+"</div>"
												+"<input type='hidden' name='id-prest' value='"+p.id_prestamo+"'/>"
											+"</td>"
										  +"</tr>";
								};

						$(newRow).appendTo("#prestamos tbody");
					}
				}	
			});
			$('.info.circle.icon').popup();
			
			$('body .ui.dropdown').dropdown({
				action: 'nothing',
				action: 'hide'
			});

			// $('.fluid.dropdown').dropdown();
			$('#addusuario_segment .ui.dropdown').dropdown();

			$('#loader2').css('display','none');
			$('#prestamos').css('visibility','visible');
		}
	});
}
