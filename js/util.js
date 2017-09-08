'use strict';

(function () {

  function showError(errorMessage) {
    var node = document.createElement('div');
    node.style.zIndex = 100;
    node.style.margin = '0 auto';
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'red';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.CONSTATNS = {
    KEYCODES: {
      ESC_KEYCODE: 27,
      ENTER_KEYCODE: 13
    },
    WIZARDS_ATTRIBUTES: {
      EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
      COAT_COLORS: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      FIREBALL_COLORS: [
        '#ee4830',
        '#30a8ee',
        '#5ce6c0',
        '#e848d5',
        '#e6e848'
      ],
      WIZARDS_QUANTITY: 4
    }
  };

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.CONSTATNS.KEYCODES.ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.CONSTATNS.KEYCODES.ENTER_KEYCODE) {
        action();
      }
    },
    makeCounter: function () {
      var count = 1;

      return function (array) {
        if (count >= array.length) {
          count = 0;
          return count++;
        } else {
          return count++;
        }
      };
    },
    showError: showError
  };

})();
