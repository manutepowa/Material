$(document).ready(function(){

	// ********************************************* PAGINADOR *****************************************************
	// 
	// http://jsfiddle.net/gabrieleromanato/Xugej/ ejemplo Paginador con jQuery
	// 
	

	//----------------------------------------> VISTA PAGINADOR <--------------------------------------------------
	var totalFilasTablaPrestamos = $('#prestamos').find('tbody tr').length;
	//console.log('total de TR tabla Prestamos: '+totalFilasTablaPrestamos);
	
	$('#prestamos').find('tbody tr').hide().slice(0, 15).show();
	totalPaginasPrestamos = totalFilasTablaPrestamos / 15; // math.ceil redondea el resoltado por encima

	var paginador = "<a id='btnPagAtras' class='item'><i class='left arrow icon'></i>Atras</a>"
						+"<a id='numPagina1' class='item active'>1</a>";
					for(i=2; i<=Math.ceil(totalPaginasPrestamos); i++)
					{
						paginador += "<a id='numPagina"+i+"' class='item'>"+i+"</a>";
					}
						  
					paginador += "<a id='btnPagSiguiente' class='item'>Siguiente <i class='icon right arrow'></i></a>";
	$("#paginador").html(paginador);
	//----------------------------------------> FIN VISTA PAGINADOR <----------------------------------------------


	//---------------------------------------------> LOGICA PAGINADOR <--------------------------------------------
	var numPagina = 0;
	var intNumPagina = 0;


	$( "a[id^=numPagina]" ).click(function( event ) {
 
        var paginaActual = $(this).text().trim();

        $( "a.item" ).removeClass('active');
        $(this).addClass( 'item active' );
        $('#prestamos').find('tbody tr').hide().slice((paginaActual*15)-15, paginaActual*15).show();
        
    });

    $("#btnPagSiguiente").click(function (event){

    	numPagina = $('a[id^=numPagina].item.active').text().trim();
    	siguientePagina = parseInt(numPagina);

		siguientePagina++;

		if(siguientePagina>Math.ceil(totalPaginasPrestamos))
		{
			return;
		}
		else
		{
			$( "a.item" ).removeClass('active');
			$( '#numPagina'+siguientePagina ).addClass('active');
			$('#prestamos').find('tbody tr').hide().slice((siguientePagina*15)-15, siguientePagina*15).show();
		}

	});

	 $("#btnPagAtras").click(function (event){

    	numPagina = $('a[id^=numPagina].item.active').text().trim();
    	anteriorPagina = parseInt(numPagina);

		anteriorPagina--;

		if(anteriorPagina<=0)
		{
			return;
		}
		else
		{
			$( "a.item" ).removeClass('active');
			$( '#numPagina'+anteriorPagina ).addClass('active');
			$('#prestamos').find('tbody tr').hide().slice((anteriorPagina*15)-15, anteriorPagina*15).show();
		}

	});
	//---------------------------------------------> FIN LOGICA PAGINADOR <--------------------------------------------

	// ********************************************* FIN PAGINADOR ****************************************************
});