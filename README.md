## jquery.validatestrictly
=======================

A Validation Plugin for Inputs with Parameters

$('.register_form #id_first_name').on('input', function() {
  $(this).validateStrictly(['specialChars','numbers']);
});
