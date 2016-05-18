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

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlmateriales, function(mat){
		
		for (var j = 0; j < urlmateriales.length; j++) {

			$.each(mat, function(i, p){
				
				if(cnt != p.length){

					if(j!=0 && p[j][0]==p[j-1][0]){
						
						if(!p[j][2]){
							$("table[id=t_materiales]>tbody>tr[data-value='" + p[j][0]).addClass("negative");
							$("table[id=t_materiales]>tbody>tr[data-value='" + p[j][0] + "']>td:nth-child(2)").html("Préstamo activo");
						}
					}
					else{
						var fDev;

						if(p[j][2]){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

						if(error_field == 1){
							var newRow = "<tr class='negative' data-value='"+p[j][0]+"'>";
							error_field = 0;
						}
						else{
							var newRow = "<tr data-value='"+p[j][0]+"'>";
						}

						newRow += 	"<td>"+p[j][1]+"</td>";
								if (fDev == 'Préstamo activo') {
									newRow +=	"<td>Préstamo activo</td>"
												+"<td class='center aligned'><button id='hist_mat_"+p[j][0]+"' class='ui button' title='Ver historial de este material'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
								else{
									newRow +=	"<td>Sin prestamos activos</td>"
												+"<td class='center aligned'><button id='hist_mat_"+p[j][0]+"' class='ui button' title='Ver historial de este material'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
						$(newRow).appendTo("#t_materiales tbody");
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ningún material añadido en la web.</td></tr>";
			$(newRow).appendTo("#t_materiales tbody");
		}
	});
}

function loadMaterialesHistorial(mat, id){
	var urlmaterial = '../function/loadMaterialHist.php?id='+id;

	$("#t_materiales_hist tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlmaterial, function(mate){
		
		for (var j = 0; j < urlmaterial.length; j++) {

			$.each(mate, function(i, p){
				
				if(cnt != p.length){

					var fDev;

					if(p[j][4]){fDev=p[j][4];}else{fDev="No devuelto"; error_field = 1;}

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
								+"<td>"+fDev+"</td>"
							+"</tr>";
					$(newRow).appendTo("#t_materiales_hist tbody");

					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_materiales_hist tbody");
		}
		else{
			$('#materiales_container_hist > p > strong').html(mat);
		}
	});
}

function loadPersonas(){
	var urlpersonas = '../function/loadPersonas.php';

	$("#t_personas tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlpersonas, function(pers){
		
		for (var j = 0; j < urlpersonas.length; j++) {

			$.each(pers, function(i, p){
				
				if(cnt != p.length){

					if(j!=0 && p[j][0]==p[j-1][0]){
						
						if(!p[j][2]){
							$("table[id=t_personas]>tbody>tr[data-value='" + p[j][0]).addClass("negative");
							$("table[id=t_personas]>tbody>tr[data-value='" + p[j][0] + "']>td:nth-child(2)").html("Préstamo activo");
						}
					}
					else{
						var fDev;

						if(p[j][2]){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

						if(error_field == 1){
							var newRow = "<tr class='negative' data-value='"+p[j][0]+"'>";
							error_field = 0;
						}
						else{
							var newRow = "<tr data-value='"+p[j][0]+"'>";
						}

						newRow += 	"<td>"+p[j][1]+"</td>";
								if (fDev == 'Préstamo activo') {
									newRow +=	"<td>Préstamo activo</td>"
												+"<td class='center aligned'><button id='hist_pers_"+p[j][0]+"' class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
								else{
									newRow +=	"<td>Sin prestamos activos</td>"
												+"<td class='center aligned'><button id='hist_pers_"+p[j][0]+"' class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
						$(newRow).appendTo("#t_personas tbody");
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ninguna persona añadida en la web.</td></tr>";
			$(newRow).appendTo("#t_personas tbody");
		}
	});
}

function loadPersonasHistorial(per, id){
	var urlpersona = '../function/loadPersonaHist.php?id='+id;

	$("#t_personas_hist tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlpersona, function(pers){
		
		for (var j = 0; j < urlpersona.length; j++) {

			$.each(pers, function(i, p){
				
				if(cnt != p.length){

					if(j!=0 && p[j][0]==p[j-1][0]){
						$("table[id = t_personas_hist]>tbody>tr[data-value='" + p[j][0] + "']>td:first").append(" &nbsp;||&nbsp; "+p[j][1]);
					}

					else{
						var fDev;

						if(p[j][4]){fDev=p[j][4];}else{fDev="No devuelto"; error_field = 1;}

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
									+"<td>"+fDev+"</td>"
								+"</tr>";
						$(newRow).appendTo("#t_personas_hist tbody");
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_personas_hist tbody");
		}
		else{
			$('#personas_container_hist > p > strong').html(per);
		}
	});
}

function loadLugares(){
	var urllugares = '../function/loadLugares.php';

	$("#t_lugares tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urllugares, function(lug){
		
		for (var j = 0; j < urllugares.length; j++) {

			$.each(lug, function(i, p){
				
				if(cnt != p.length){

					if(j!=0 && p[j][0]==p[j-1][0]){
						
						if(!p[j][2]){
							$("table[id=t_lugares]>tbody>tr[data-value='" + p[j][0]).addClass("negative");
							$("table[id=t_lugares]>tbody>tr[data-value='" + p[j][0] + "']>td:nth-child(2)").html("Préstamo activo");
						}
					}
					else{
						var fDev;

						if(p[j][2]){fDev="Ningún prestamo activo";}else{fDev="Préstamo activo"; error_field = 1;}

						if(error_field == 1){
							var newRow = "<tr class='negative' data-value='"+p[j][0]+"'>";
							error_field = 0;
						}
						else{
							var newRow = "<tr data-value='"+p[j][0]+"'>";
						}

						newRow += 	"<td>"+p[j][1]+"</td>";
								if (fDev == 'Préstamo activo') {
									newRow +=	"<td>Préstamo activo</td>"
												+"<td class='center aligned'><button id='hist_lug_"+p[j][0]+"' class='ui button' title='Ver historial de este lugar'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
								else{
									newRow +=	"<td>Sin prestamos activos</td>"
												+"<td class='center aligned'><button id='hist_lug_"+p[j][0]+"' class='ui button' title='Ver historial de este lugar'><i class='history icon'></i>Historial</button></td>"
											+"</tr>";
								}
						$(newRow).appendTo("#t_lugares tbody");
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>No hay ningún lugar añadido en la web.</td></tr>";
			$(newRow).appendTo("#t_lugares tbody");
		}
	});
}

function loadLugaresHistorial(lug, id){
	var urllugar = '../function/loadLugarHist.php?id='+id;

	$("#t_lugares_hist tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urllugar, function(lugar){
		
		for (var j = 0; j < urllugar.length; j++) {

			$.each(lugar, function(i, p){
				
				if(cnt != p.length){

					if(j!=0 && p[j][0]==p[j-1][0]){
						$("table[id = t_lugares_hist]>tbody>tr[data-value='" + p[j][0] + "']>td:first").append(" &nbsp;||&nbsp; "+p[j][1]);
					}

					else{
						var fDev;

						if(p[j][4]){fDev=p[j][4];}else{fDev="No devuelto"; error_field = 1;}

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
									+"<td>"+fDev+"</td>";
								+"</tr>";
						$(newRow).appendTo("#t_lugares_hist tbody");
					}
					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_lugares_hist tbody");
		}
		else{
			$('#lugares_container_hist > p > strong').html(lug);
		}
	});
}