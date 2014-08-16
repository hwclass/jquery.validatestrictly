define(["jquery/core/init", "jquery.validatestrictly"], function( $ ) {
	$('input').on('input', function() {
	  $(this).validateStrictly(['specialChars','numbers'], [{customCase : 'abc'}]);
	});
})