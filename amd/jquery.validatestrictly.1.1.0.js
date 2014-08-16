/*!
 * jquery.validatestrictly. The jQuery validation plugin
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : April 2014
 * Version : 1.0
 * Released: May 1st, 2014
 *
 *
 * prevents any inputs to be entered special characters, numbers or alphabetical characters
 */

define([ "jquery/event", "jquery/manipulation" ], function( $ ) {

	$.fn.validateStrictly = function (validationCases, customCases) {
	  var validationStrings = {
	    specialChars: "!@#$%^&*()+=-[]\\\';,./{}|\":<>?_",
	    numbers: "0123456789",
	    alphabetical: "abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ"
	  }
	  var defineProp = function ( obj, key, value ){
	    var config = {
	      value: value,
	      writable: true,
	      enumerable: true,
	      configurable: true
	    };
	    Object.defineProperty( obj, key, config );
	  };
	  var _customCases = (customCases?customCases:[]);
	  if(typeof _customCases !== "undefined" && typeof _customCases !== "null") {
	      for (var count=0, len=_customCases.length; count < len; count++) {
	          for (key in _customCases[count]){
	              defineProp(validationStrings, key, _customCases[count][key]);
	              validationCases.push(key);
	          }
	      }
	  }
	  var $currentInput = $(this);
	  var currentCharLength = $(this).val().length;
	  String.prototype.replaceAt = function (index, character) {
	    var _newString = '';
	    if (this.length > 1) {
	      _newString = this.substr(0, index) + this.substr(index + 1, this.length);
	    }
	    return _newString;
	  }
	  var count = 0,
	  hasValidationStrings = false;
	  for (var countChar = 0; countChar < validationCases.length; countChar++) {
	    var charCases = validationStrings[validationCases[countChar]];
	    for (count = 0; count <= currentCharLength; count++) {
	      if (charCases.indexOf($currentInput.val().charAt(count)) != -1 && $currentInput.val().charAt(count) != '') {
	        var _text = $currentInput.val();
	        $currentInput.val(_text.replaceAt(count, $currentInput.val().charAt(count)));
	        currentCharLength = $currentInput.val().length;
	        hasValidationStrings = true;
	      }
	    }
	    if (count > currentCharLength && hasValidationStrings) {
	      while (count >= 0) {
	        if (charCases.indexOf($currentInput.val().charAt(count)) != -1 && charCases.indexOf($currentInput.val().charAt(count)) != 0) {
	          $currentInput.val($currentInput.val().replaceAt(count, $currentInput.val().charAt(count)));
	          currentCharLength = $currentInput.val().length;
	          count--;
	        } else {
	          count--;
	        }
	      }
	    }
	  }
	  return this;
	}

});