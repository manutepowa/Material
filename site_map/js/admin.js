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

		loadPersonas();
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

	$(document).on('click', 'button[id ^= hist_pers_]', function(event){
		var id = $(this).parents("tr").attr("data-value");
		loadPersonasHistorial(id);
	});

});

function loadMaterialHistorial(id){
	var urlmaterial = '../function/loadPersonaHist.php?id='+id;

	$("#t_materiales_hist tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlmaterial, function(pers){
		
		for (var j = 0; j < urlmaterial.length; j++) {

			$.each(pers, function(i, p){
				
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

					newRow += 	"<td>"+p[j][1]+"</td><td>"+p[j][2]+"</td><td>"+p[j][3]+"</td><td>"+fDev+"</td>";
							//if (fDev !== 'No devuelto') {
								//newRow +=	"<td class='center aligned'><button class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
										+"</tr>";
							//}
							//else{
							//	newRow +=	"<td>Sin prestamos activos</td>"
							//				+"<td class='center aligned'><button class='ui button' title='Ver historial de esta persona'><i class='history icon'></i>Historial</button></td>"
							//			+"</tr>";
							//}
					$(newRow).appendTo("#t_materiales_hist tbody");

					cnt++;
				}		
			});
		};
		if(cnt == 0){
			var newRow = "<tr class='center'><td colspan='6'>ERROR AL CARGAR LOS PRESTAMOS.</td></tr>";
			$(newRow).appendTo("#t_materiales_hist tbody");
		}
	});
}

function loadPersonas(){
	var urlpersonas = '../function/loadPersonas.php';

	$("#t_personas tbody").html("");

	var cnt = 0;
	var error_field = 0;
	var prestamo_activo;

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

function loadPersonasHistorial(id){
	var urlpersona = '../function/loadPersonaHist.php?id='+id;

	$("#t_personas_hist tbody").html("");

	var cnt = 0;
	var error_field = 0;

	$.getJSON(urlpersona, function(prest){
		
		for (var j = 0; j < urlpersona.length; j++) {

			$.each(prest, function(i, p){
				
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
									+"<td>"+fDev+"</td>";
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
	});
}