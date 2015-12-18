$(document).ready(function(){
	$('body').css('background','#F0F0F0');
// 	var content = [
//     	{ nombre: "Ángel Fuentes Mirete" },
//     	{ nombre: "Alberto García Guilló"},
//     	{ nombre: "Manuel Tercero Soria" }
//   // etc
// ];
// var content = [

//   { title: "Angel Fuentes Mirete" }
  
// ];
// console.log(content);
var content = [
  {
"nombre": "Angel Fuentes Mirete"
},
{
"nombre": "Alberto Garcia Guillo"
},
{
"nombre": "Manuel Tercero Soria"
}
  // etc
];
	// var content;
	$.ajax({
		url: '../function/getPerson.php',
		type: 'POST',
		dataType: "json",
		contentType: 'application/json; charset=UTF-8',
		success: function(e){
			// content = e;
			$('.ui.search')
			  .search({
			    source : content,
			    searchFields: [
			      'nombre'
			    ],
			    // searchFullText: false
			  });
		}
	});
	

	

});