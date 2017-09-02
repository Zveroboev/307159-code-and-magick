'use strict';

(function () {

  window.colorize = function (element, counter, colors, onColorChange) {
    element.addEventListener('click', function () {
      var color = colors[counter(colors)];

      onColorChange(element, color);
    });
  };

})();
