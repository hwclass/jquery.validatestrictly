## jquery.validatestrictly
=======================

A Validation Plugin for Inputs with Parameters

Validates if input character value is a special char, digit or alphabetical.

### usage
$('input').bind('keyup', function() {
  $(this).validateStrictly(['case1','case2', 'case3']);
});



### usage (IE)
$('input').bind('keyup', function() {
  $(this).validateStrictly(['specialChars','numbers', 'alphabetical']);
});


### usage (IE)
$('input').on('input', function() {
  $(this).validateStrictly(['specialChars','numbers', 'alphabetical']);
});
