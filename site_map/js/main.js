$(document).ready(function(){
	$('body').css('background','#F0F0F0');

	// $.ajax({
	// 	url: '../function/getPerson.php',
	// 	type: 'POST',
	// 	dataType: "json",
	// 	contentType: 'application/json; charset=UTF-8',
	// 	success: function(e){
			
	// });


//MEDIO BUENO
$('.ui.search')
  .search({
    apiSettings: {
    	url: '../function/getPerson.php',
    	onResponse: function(eq) {
    		var stringified = JSON.stringify(eq);
    		console.log(stringified);
    		return stringified;
    	}
    },
    fields: {
      title   : 'nombre'
    }
});
	

});