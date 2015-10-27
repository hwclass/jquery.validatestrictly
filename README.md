## jquery.validatestrictly 1.1.0
<i>Latest update done up to 1.1.0 : custom cases</i>

A Validation Plugin for Inputs with Parameters

Validates and deletes if input character value is a special char, digit or alphabetical by every char.

### usage (IE)
<pre lang="javascript">
<code>
$('input').bind('keyup', function() {
  $(this).validateStrictly(['case1','case2', 'case3'], [{customCaseN : 'abc'}]);
});
</code>
</pre>

### usage (Modern Browsers)
<pre lang="javascript">
<code>
//The code below stricts using characters in case of cases like case1, case2, case3 and so on...
$('input').on('input', function() {
  $(this).validateStrictly(['case1','case2', 'case3'], [{customCaseN : 'abc'}]);
});
</code>
</pre>

### Usage for All Cases (IE)
<pre lang="javascript">
<code>
//The code below stricts using characters in case of cases like English alphabetical characters and etc.
$('input').bind('input', function() {
  $(this).validateStrictly(['specialChars','englishAlphabetical','turkishAlphabetical','space']);
});
</code>
</pre>

### Usage for All Cases (Modern Browsers)
<pre lang="javascript">
<code>
//The code below stricts using characters in case of cases like English alphabetical characters and etc.
$('input').on('input', function() {
  $(this).validateStrictly(['specialChars','englishAlphabetical','turkishAlphabetical','space']);
});
</code>
</pre>
