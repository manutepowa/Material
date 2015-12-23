$(document).ready(function(){
	$('.filtros .filtro input').keyup(function(e){
		var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filtros'),
        column = $panel.find($input.parents('div')).index() - 1;


        /*Hasta aqui funciona*/
        $container = $panel.parents('.container'),
        $table = $container.find('.table'),
        $rows = $table.find('tbody tr');
        // $('body').html($table);

		var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        console.log($filteredRows);


		$table.find('tbody .no-result').remove();
        
        $rows.show();
        $filteredRows.hide();

        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td>No hay resultados</td></tr>'));
        }
        

    });

});