var first = 1;
var firstC = 1;
var firstU = 1;
var reset; 

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

    $('.filtros .filtro input:text').keyup(function(e){
        var totalFilasTablaPrestamos = $('#prestamos').find('tbody tr').length;
        $('#prestamos').find('tbody tr').hide().slice(0, totalFilasTablaPrestamos).show();
        $('#paginadorPrestamos').hide();
        var code = e.keyCode || e.which;
        if (code == '9')
        {
            var paginaActual = $('a[id^=numPagina].item.active').text().trim();
            $('#prestamos').find('tbody tr').hide().slice((paginaActual*15)-15, paginaActual*15).show();
            $('#paginadorPrestamos').show();
            return;
        }
        
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
            var value = normalize($(this).find('td').eq(column).text().toLowerCase()); 
            return value.indexOf(inputContent) === -1;
        });

        $table.find('tbody .no-result').remove();
        
        $('#prestamos tbody').html($rows);

        $filteredRows.remove();

        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($("<tr class='center'><td colspan='7'>No hay préstamos que cumplan con las características indicadas.</td></tr>"));
        }

        first = 0;

        $('body .ui.dropdown').dropdown({
            action: 'nothing',
            action: 'hide'
        });

        $('.info.circle.icon').popup();
    
        var filterVacio = $(this).val();

        if(filterVacio==''){

            if($('.toggle').checkbox('is checked')){
                reset = $resetChecked;
                $('#prestamos tbody').html(reset);
            }
            else{
                reset = $resetUnchecked;
                $('#prestamos tbody').html(reset);
            }
            
            var paginaActual = $('a[id^=numPagina].item.active').text().trim();
            $('#prestamos').find('tbody tr').hide().slice((paginaActual*15)-15, paginaActual*15).show();
            $('#paginadorPrestamos').show();

            $('body .ui.dropdown').dropdown({
                action: 'nothing',
                action: 'hide'
            });

            $('.info.circle.icon').popup();
        }
    });

    $('.filtro input:text').focus(function(){

        if($('.toggle').checkbox('is checked')){
            if(firstC == 1){
                $resetChecked = $('#prestamos').find('tbody tr');
                firstC = 0;
            }
        }
        else{
            if(firstU == 1){
                $resetUnchecked = $('#prestamos').find('tbody tr');
                firstU = 0;
            }
        }
        
        $('.filtro input:text').val('');

        if($('.toggle').checkbox('is checked')){
            reset = $resetChecked;
            $('#prestamos tbody').html(reset);
        }
        else{
            reset = $resetUnchecked;
            $('#prestamos tbody').html(reset);
        }

        var paginaActual = $('a[id^=numPagina].item.active').text().trim();
        $('#prestamos').find('tbody tr').hide().slice((paginaActual*15)-15, paginaActual*15).show();
        $('#paginadorPrestamos').show();
        
        $('body .ui.dropdown').dropdown({
            action: 'nothing',
            action: 'hide'
        });

        $('.info.circle.icon').popup();
    });
});