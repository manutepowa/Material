$(document).ready(function(){

	//$('#side_inicio').hide();
	$('#side_prestamos').hide();
	$('#side_materiales').hide();
	$('#side_personas').hide();
	$('#side_lugares').hide();

	$('#materiales_container_hist').hide();
	$('#personas_container_hist').hide();
	$('#lugares_container_hist').hide();

	//$('#side_inicio').show();
	$('#side_prestamos').show();
	
	//$('#btn_inicio').addClass("active");
	$('#btn_prestamos').addClass("active");

	/*$(document).on('click', '#btn_inicio', function(){
		//$('#side_inicio').show();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').hide();
	});*/

	$(document).on('click', '#btn_prestamos', function(){
		//$('#side_inicio').hide();
		$('#side_prestamos').show();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').hide();
	});

	$(document).on('click', '#btn_materiales', function(){
		//$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').show();
		$('#side_personas').hide();
		$('#side_lugares').hide();

		$('#materiales_container_hist').hide();
		$('#materiales_container').show();

		loadMateriales();
	});

	$(document).on('click', '#btn_personas', function(){
		//$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').show();
		$('#side_lugares').hide();

		$('#personas_container_hist').hide();
		$('#personas_container').show();

		loadPersonas();
	});

	$(document).on('click', '#btn_lugares', function(){
		//$('#side_inicio').hide();
		$('#side_prestamos').hide();
		$('#side_materiales').hide();
		$('#side_personas').hide();
		$('#side_lugares').show();

		$('#lugares_container_hist').hide();
		$('#lugares_container').show();

		loadLugares();
	});

	$(document).on('click', '.item', function(event){
		$('.item').removeClass("active");
		$(this).addClass("active");
	});

	$(document).on('click', 'button[id ^= hist_mat_]', function(event){
		
		$('#materiales_container').hide();
		$('#materiales_container_hist').show();
		var mat = $(this).parents("tr").find("td:first").html();
		var id = $(this).parents("tr").attr("data-value");
		loadMaterialesHistorial(mat,id);
	});

	$(document).on('click', '#volver_m', function(event){
		
		$('#materiales_container_hist').hide();
		$('#materiales_container').show();
	});

	$(document).on('click', 'button[id ^= hist_pers_]', function(event){
		
		$('#personas_container').hide();
		$('#personas_container_hist').show();
		var per = $(this).parents("tr").find("td:first").html();
		var id = $(this).parents("tr").attr("data-value");
		loadPersonasHistorial(per,id);
	});

	$(document).on('click', '#volver_p', function(event){
		
		$('#personas_container_hist').hide();
		$('#personas_container').show();
	});

	$(document).on('click', 'button[id ^= hist_lug_]', function(event){
		
		$('#lugares_container').hide();
		$('#lugares_container_hist').show();
		var lug = $(this).parents("tr").find("td:first").html();
		var id = $(this).parents("tr").attr("data-value");
		loadLugaresHistorial(lug,id);
	});

	$(document).on('click', '#volver_l', function(event){
		
		$('#lugares_container_hist').hide();
		$('#lugares_container').show();
	});

});

function loadMateriales(){
	var urlmateriales = '../function/loadMateriales.php';

	$("#t_materiales tbody").html("");

	var error_field = 0;

	$.getJSON(urlmateriales, function(mat){

		if(mat.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ningún material añadido en la web.</td></tr>";
			$(newRow).appendTo("#t_materiales tbody");
		}
		else{
			$.each(mat, function(i, p){

				if(i!=0 && p.id_material==mat[i-1].id_material){
					
					if(!p.fecha_devolucion){
						$("table[id=t_materiales]>tbody>tr[data-value='" + p.id_material).addClass("negative");
						$("table[id=t_materiales]>tbody>tr[data-value='" + p.id_material + "']>td:nth-child(2)").html("Préstamo activo");
					}
				}
				else{
					var fDev;

					if(p.fecha_devolucion){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_material+"'>";
						error_field = 0;
					}
					else{
						var newRow = "<tr data-value='"+p.id_material+"'>";
					}

					newRow += 	"<td>"+p.descripcion+"</td>";
							if (fDev == 'Préstamo activo') {
								newRow +=	"<td>Préstamo activo</td>"
											+"<td class='center aligned'><button id='hist_mat_"+p.id_material+"' class='ui button' title='Ver historial de este material'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
							else{
								newRow +=	"<td>Sin prestamos activos</td>"
											+"<td class='center aligned'><button id='hist_mat_"+p.id_material+"' class='ui button' title='Ver historial de este material'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
					$(newRow).appendTo("#t_materiales tbody");
				}		
			});
		}
	});
}

function loadMaterialesHistorial(mat, id){
	var urlmaterial = '../function/loadMaterialHist.php?id='+id;

	$("#t_materiales_hist tbody").html("");

	var error_field = 0;

	$.getJSON(urlmaterial, function(mate){

		$('#materiales_container_hist > p > strong').html(mat);

		if(mate.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_materiales_hist tbody");
		}
		else{
			
			$.each(mate, function(i, p){
			
				var fDev;

				if(p.fecha_devolucion){fDev=p.fecha_devolucion;}else{fDev="No devuelto"; error_field = 1;}

				if(error_field == 1){
					var newRow = "<tr class='negative' data-value='"+p.id_prestamo+"'>";
					error_field = 0;
				}
				else{
					var newRow = "<tr data-value='"+p.id_prestamo+"'>";
				}

				newRow += 	"<td>"+p.nombre+"</td>"
							+"<td>"+p.lugar+"</td>"
							+"<td>"+p.fecha_prestamo+"</td>"
							+"<td>"+fDev+"</td>"
						+"</tr>";
				$(newRow).appendTo("#t_materiales_hist tbody");	
			});
		}
	});
}

function loadPersonas(){
	var urlpersonas = '../function/loadPersonas.php';

	$("#t_personas tbody").html("");

	var error_field = 0;

	$.getJSON(urlpersonas, function(pers){

		if(pers.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ninguna persona añadida en la web.</td></tr>";
			$(newRow).appendTo("#t_personas tbody");
		}

		else{
			$.each(pers, function(i, p){
				
				if(i!=0 && p.id_persona==pers[i-1].id_persona){
					
					if(!p.fecha_devolucion){
						$("table[id=t_personas]>tbody>tr[data-value='" + p.id_persona).addClass("negative");
						$("table[id=t_personas]>tbody>tr[data-value='" + p.id_persona + "']>td:nth-child(2)").html("Préstamo activo");
					}
				}
				else{
					var fDev;

					if(p.fecha_devolucion){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_persona+"'>";
						error_field = 0;
					}
					else{
						var newRow = "<tr data-value='"+p.id_persona+"'>";
					}

					newRow += 	"<td>"+p.nombre+"</td>";
							if (fDev == 'Préstamo activo') {
								newRow +=	"<td>Préstamo activo</td>"
											+"<td class='center aligned'><button id='hist_pers_"+p.id_persona+"' class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
							else{
								newRow +=	"<td>Sin prestamos activos</td>"
											+"<td class='center aligned'><button id='hist_pers_"+p.id_persona+"' class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
					$(newRow).appendTo("#t_personas tbody");
				}		
			});
		}		
	});
}

function loadPersonasHistorial(per, id){
	var urlpersona = '../function/loadPersonaHist.php?id='+id;

	$("#t_personas_hist tbody").html("");

	var error_field = 0;

	$.getJSON(urlpersona, function(pers){

		$('#personas_container_hist > p > strong').html(per);

		if(pers.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_personas_hist tbody");
		}
		else{
			$.each(pers, function(i, p){

				if(i!=0 && p.id_prestamo==pers[i-1].id_prestamo){
					$("table[id = t_personas_hist]>tbody>tr[data-value='" + p.id_prestamo + "']>td:first").append(" &nbsp;||&nbsp; "+p.descripcion);
				}

				else{
					var fDev;

					if(p.fecha_devolucion){fDev=p.fecha_devolucion;}else{fDev="No devuelto"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_prestamo+"'>";
						error_field = 0;
					}

					else{
						var newRow = "<tr data-value='"+p.id_prestamo+"'>";
					}

					newRow += 	"<td>"+p.descripcion+"</td>"
								+"<td>"+p.lugar+"</td>"
								+"<td>"+p.fecha_prestamo+"</td>"
								+"<td>"+fDev+"</td>"
							+"</tr>";
					$(newRow).appendTo("#t_personas_hist tbody");
				}
			});
		}
	});
}

function loadLugares(){
	var urllugares = '../function/loadLugares.php';

	$("#t_lugares tbody").html("");

	var error_field = 0;

	$.getJSON(urllugares, function(lug){

		if(lug.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ningún lugar añadido en la web.</td></tr>";
			$(newRow).appendTo("#t_lugares tbody");
		}

		else{
			$.each(lug, function(i, p){
				
				if(i!=0 && p.id_lugar==lug[i-1].id_lugar){
					
					if(!p.fecha_devolucion){
						$("table[id=t_lugares]>tbody>tr[data-value='" + p.id_lugar).addClass("negative");
						$("table[id=t_lugares]>tbody>tr[data-value='" + p.id_lugar + "']>td:nth-child(2)").html("Préstamo activo");
					}
				}
				else{
					var fDev;

					if(p.fecha_devolucion){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_lugar+"'>";
						error_field = 0;
					}
					else{
						var newRow = "<tr data-value='"+p.id_lugar+"'>";
					}

					newRow += 	"<td>"+p.lugar+"</td>";
							if (fDev == 'Préstamo activo') {
								newRow +=	"<td>Préstamo activo</td>"
											+"<td class='center aligned'><button id='hist_lug_"+p.id_lugar+"' class='ui button' title='Ver historial de este lugar'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
							else{
								newRow +=	"<td>Sin prestamos activos</td>"
											+"<td class='center aligned'><button id='hist_lug_"+p.id_lugar+"' class='ui button' title='Ver historial de este lugar'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							}
					$(newRow).appendTo("#t_lugares tbody");
				}	
			});
		}
	});
}

function loadLugaresHistorial(lug, id){
	var urllugar = '../function/loadLugarHist.php?id='+id;

	$("#t_lugares_hist tbody").html("");

	var error_field = 0;

	$.getJSON(urllugar, function(lugar){

		$('#lugares_container_hist > p > strong').html(lug);

		if(lugar.length == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_lugares_hist tbody");
		}
		else{
			$.each(lugar, function(i, p){
				
				if(i!=0 && p.id_prestamo==lugar[i-1].id_prestamo){
					$("table[id = t_lugares_hist]>tbody>tr[data-value='" + p.id_prestamo + "']>td:first").append(" &nbsp;||&nbsp; "+p.descripcion);
				}

				else{
					var fDev;

					if(p.fecha_devolucion){fDev=p.fecha_devolucion;}else{fDev="No devuelto"; error_field = 1;}

					if(error_field == 1){
						var newRow = "<tr class='negative' data-value='"+p.id_prestamo+"'>";
						error_field = 0;
					}

					else{
						var newRow = "<tr data-value='"+p.id_prestamo+"'>";
					}

					newRow += 	"<td>"+p.descripcion+"</td>"
								+"<td>"+p.nombre+"</td>"
								+"<td>"+p.fecha_prestamo+"</td>"
								+"<td>"+fDev+"</td>";
							+"</tr>";
					$(newRow).appendTo("#t_lugares_hist tbody");
				}		
			});
		}
	});
}