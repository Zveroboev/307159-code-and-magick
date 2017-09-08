'use strict';

(function () {

  window.colorize = function (element, counter, colors, onColorChange, setColor) {
    element.addEventListener('click', function () {
      var color = colors[counter(colors)];

      onColorChange(element, color, setColor);
    });
  };

})();
