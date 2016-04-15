var first = 1;

$(document).ready(function(){
	$('.filtros .filtro input').keyup(function(e){
		var code = e.keyCode || e.which;
        if (code == '9') return;
        
        var $input = $(this);
        inputContent = $input.val().toLowerCase();
        $panel = $input.parents('.filtros');
        column = $panel.find($input.parents('div')).index();

        $container = $panel.parents('.container');
        $table = $container.find('.table');

        if(first == 1){
            $allInfo = $table.find('tbody tr');
        }
        else{
            $partialRows = $table.find('tbody tr');
        }

        if (code  == '8'){
            $rows = $allInfo;
        }
        else{
            if(first == 1){
                $rows = $allInfo;
            }
            else{
                $rows = $partialRows;
            }
        }

		var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column-1).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });

		$table.find('tbody .no-result').remove();
        
        // $rows.show();
        $('.table tbody').html($rows);
        $filteredRows.remove();

        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($("<tr class='center'><td colspan='6'>No hay préstamos que cumplan con las características indicadas.</td></tr>"));
        }

        first = 0;
    });
});