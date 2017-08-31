'use strict';

// Перетаскивание окна настроек персонажа
(function () {

  var allHeight = document.documentElement.offsetHeight;
  var clientHeight = document.documentElement.clientHeight;

  document.body.style.overflowX = 'hidden';

  window.moveSetupWindow = function (evt) {
    evt.preventDefault();

    if (allHeight < clientHeight) {
      document.body.style.overflowY = 'hidden';
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
      window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      if (allHeight < clientHeight) {
        document.body.style.overflowY = 'auto';
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  };

})();
