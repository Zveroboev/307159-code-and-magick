'use strict';

// Открытие-закрытие окна настроек персонажа
(function () {

  window.setup = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.querySelector('.setup-close');
  var dialogHandle = window.setup.querySelector('.setup-user-pic');

  var posX = window.CONSTATNS.START_POSITION.POSITION_X;
  var posY = window.CONSTATNS.START_POSITION.POSITION_Y;

  function closeSetup() {
    window.setup.classList.add('hidden');

    setupClose.removeEventListener('keydown', closeSetupOnKeyDown);
    document.removeEventListener('keydown', closeSetupOnPressEsc);

    setupOpen.addEventListener('click', openSetup);
    setupOpen.addEventListener('keydown', openSetupOnKeyDown);

    dialogHandle.removeEventListener('mousedown', window.moveSetupWindow);

    window.setup.style.top = posY;
    window.setup.style.left = posX;

    window.removeEventsForDragAndDrop();
  }

  function openSetup() {
    window.setup.classList.remove('hidden');

    setupOpen.removeEventListener('click', openSetup);
    setupOpen.removeEventListener('click', openSetupOnKeyDown);

    setupClose.addEventListener('click', closeSetup);
    setupClose.addEventListener('keydown', closeSetupOnKeyDown);
    document.addEventListener('keydown', closeSetupOnPressEsc);

    dialogHandle.addEventListener('mousedown', window.moveSetupWindow);

    window.addEventsForDragAndDrop();
  }

  function openSetupOnKeyDown(evt) {
    window.util.isEnterEvent(evt, openSetup);
  }

  function closeSetupOnKeyDown(evt) {
    window.util.isEnterEvent(evt, closeSetup);
  }

  function closeSetupOnPressEsc(evt) {
    window.util.isEscEvent(evt, closeSetup);
  }

  setupOpen.addEventListener('click', openSetup);
  setupOpen.addEventListener('keydown', openSetupOnKeyDown);

})();
