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
    apiSettings: {
    	url: '../function/getPerson.php',
    	onResponse: function(eq) {
    		var response = {hola:{}};
    		// var stringified = JSON.stringify(eq);
    		$.each(eq, function(index, item) {
    			console.log(item)

    			response.hola[item.id_persona].push({
    				nom: item.nombre
    			});

    			console.log(JSON.parse(response));
    		});
    		
    		// $('.content').html(stringified);
    		return response;
    	}
    }
});
	


// $('.ui.search')
//   .search({
//     type          : 'category',
//     minCharacters : 3,
//     apiSettings   : {
//       onResponse: function(githubResponse) {
//         var
//           response = {
//             results : {}
//           }
//         ;
//         // translate GitHub API response to work with search
//         $.each(githubResponse.items, function(index, item) {
//           var
//             language   = item.language || 'Unknown',
//             maxResults = 8
//           ;
//           if(index >= maxResults) {
//             return false;
//           }
//           // create new language category
//           if(response.results[language] === undefined) {
//             response.results[language] = {
//               name    : language,
//               results : []
//             };
//           }
//           // add result to category
//           response.results[language].results.push({
//             title       : item.name,
//             description : item.description,
//             url         : item.html_url
//           });
//         });
//         console.log(response);
//         return response;
//       },
//       url: '//api.github.com/search/repositories?q={query}'
//     }
//   })
// ;

});