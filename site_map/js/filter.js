var first = 1;

// FUNCION PARA QUITAR ACENTOS Y Ñ´s
var normalize = (function() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
    to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
    mapping = {};
         
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
         
        return function( str ) {
            var ret = [];
            for( var i = 0, j = str.length; i < j; i++ ) {
                var c = str.charAt( i );
                if( mapping.hasOwnProperty( str.charAt( i ) ) )
                    ret.push( mapping[ c ] );
                else
                    ret.push( c );
            }      
            return ret.join( '' );
        }
})();

$(document).ready(function(){
	$('.filtros .filtro input').keyup(function(e){
		var code = e.keyCode || e.which;
        if (code == '9') return;
        
        var $input = $(this);

        inputContent = normalize($input.val().toLowerCase());
        $panel = $input.parents('.filtros');
        column = $panel.find($input.parents('div')).index();
        
        $container = $panel.parents('.container');
        $table = $container.find('#prestamos');

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
            var value = normalize($(this).find('td').eq(column-1).text().toLowerCase());
            return value.indexOf(inputContent) === -1;
        });

		$table.find('tbody .no-result').remove();
        
        $('#prestamos tbody').html($rows);
        console.log($filteredRows);
        $filteredRows.remove();

        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($("<tr class='center'><td colspan='6'>No hay préstamos que cumplan con las características indicadas.</td></tr>"));
        }

        first = 0;
    });
});