$(document).ready(function(){

	$('#op-modal').click(function(event) {
		$('.ui.modal')
		  .modal('show')
		;
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
	    minCharacters : 3,
	    error : {
	    	noResults   : 'No se encuentra la persona. :('
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
	    minCharacters : 3,
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
	    minCharacters : 3,
	    error : {
	    	noResults   : 'No se encuentra el lugar. :('
		},
	  })
	;

	var urlprestamo = '../function/getPrestamo.php';

	$("#prestamos tbody").html("");

	$.getJSON(urlprestamo, function(prest){
		for (var j = 0; j < urlprestamo.length; j++) {
			$.each(prest, function(i, p){
				var fDev;
				if(p[j][5]){fDev=p[j][5];}else{fDev="no devuelto";}
				
				var newRow = "<tr value='"+p[j][0]+"'>"
								+"<td>"+p[j][1]+"</td>"
								+"<td>"+p[j][2]+"</td>"
								+"<td>"+p[j][3]+"</td>"
								+"<td>"+p[j][4]+"</td>"
								+"<td>"+fDev+"</td>"
								+"<td>modificar/eliminar</td>"
							+"</tr>";
				$(newRow).appendTo("#prestamos tbody");
			});
		};
	});
});