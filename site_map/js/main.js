$(document).ready(function(){
	$('body').css('background','#F0F0F0');

	// $.ajax({
	// 	url: '../function/getPerson.php',
	// 	type: 'POST',
	// 	dataType: "json",
	// 	contentType: 'application/json; charset=UTF-8',
	// 	success: function(e){
			
	// });

var content = [
				  { title: 'Andorra' },
				  { title: 'United Arab Emirates' },
				  { title: 'Afghanistan' },
				  { title: 'Antigua' },
				  { title: 'Anguilla' },
				  { title: 'Albania' },
				  { title: 'Armenia' },
				  { title: 'Netherlands Antilles' },
				  { title: 'Angola' },
				  { title: 'Argentina' },
				  { title: 'American Samoa' },
				  { title: 'Austria' },
				  { title: 'Australia' },
				  { title: 'Aruba' },
				  { title: 'Aland Islands' },
				  { title: 'Azerbaijan' },
				  { title: 'Bosnia' },
				  { title: 'Barbados' },
				  { title: 'Bangladesh' },
				  { title: 'Belgium' },
				  { title: 'Burkina Faso' },
				  { title: 'Bulgaria' },
				  { title: 'Bahrain' },
				  { title: 'Burundi' }
				  // etc
			];
//MEDIO BUENO
$('.ui.search')
  .search({
    searchFields: [
      'title'
    ],
    source: content
   //  searchFullText: false,
   //  apiSettings: {
   //  	url: '../function/getPerson.php',
   //  	onResponse: function(eq) {
   //  		
   //  		// var stringified = eq;
   //  		console.log(content);
   //  		// $('.content').html(stringified);
   //  		return content;
   //  	}
   //  }
});
	

});