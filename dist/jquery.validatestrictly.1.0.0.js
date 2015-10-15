/*!
 * jquery.validatestrictly. The jQuery validation plugin
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io / @hwclass
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

(function ($) {
  
  $.fn.validateStrictly = function (validationCases) {
    
    this.validationStrings = {
        specialChars: "!@#$%^&*()+=-[]\\\';,./{}|\":<>?_",
        numbers: "0123456789",
        alphabetical: "abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ"
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
      var charCases = this.validationStrings[validationCases[countChar]];
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

})(jQuery);