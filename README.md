## jquery.validatestrictly 1.1.0
<i>Latest update done up to 1.1.0 : custom cases</i>

A Validation Plugin for Inputs with Parameters

Validates and deletes if input character value is a special char, digit or alphabetical by every char.

### usage
$('input').bind('keyup', function() {
  $(this).validateStrictly(['case1','case2', 'case3'], [{customCaseN : 'abc'}]);
});


### usage (IE)
$('input').bind('keyup', function() {
  $(this).validateStrictly(['specialChars','numbers'], [{customCaseN : 'abc'}]);
});


### usage (Modern Browsers)
$('input').on('input', function() {
  $(this).validateStrictly(['specialChars','numbers'], [{customCaseN : 'abc'}]);
});
