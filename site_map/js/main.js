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

});