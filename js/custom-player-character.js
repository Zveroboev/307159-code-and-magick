'use strict';

(function () {
  // Смена цвета элементов персонажа
  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;
  var setupPlayer = document.querySelector('.setup-player');
  var wizardAttributes = {
    wizardCoat: setupPlayer.querySelector('.wizard-coat'),
    wizardFireball: setupPlayer.querySelector('.setup-fireball-wrap'),
    wizardEyes: setupPlayer.querySelector('.wizard-eyes')
  };

  var coatCounter = window.util.makeCounter();
  var eyesCounter = window.util.makeCounter();
  var fireballCounter = window.util.makeCounter();

  function fillElement(element, color, setColor) {
    element.style.fill = color;
    setColor(color);
  }

  function changeElementBackground(element, color, setColor) {
    element.style.backgroundColor = color;
    setColor(color);
  }

  function setCoatColor(color) {
    setupPlayer.querySelector('input[name="coat-color"]').value = color;
    window.debounce(window.updateWizards);
  }

  function setEyesColor(color) {
    setupPlayer.querySelector('input[name="eyes-color"]').value = color;
    window.debounce(window.updateWizards);
  }

  function setFireballColor(color) {
    setupPlayer.querySelector('input[name="fireball-color"]').value = color;
    window.debounce(window.updateWizards);
  }

  window.colorize(wizardAttributes.wizardCoat, coatCounter, WIZARDS.COAT_COLORS, fillElement, setCoatColor);
  window.colorize(wizardAttributes.wizardEyes, eyesCounter, WIZARDS.EYES_COLORS, fillElement, setEyesColor);
  window.colorize(wizardAttributes.wizardFireball, fireballCounter, WIZARDS.FIREBALL_COLORS, changeElementBackground, setFireballColor);

  // Реализация магазина и инвентаря
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  function onDragStartInShop(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onDragStartInCell(evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  }

  function onDragOverHandler(evt) {
    evt.preventDefault();
    return false;
  }

  function onDropHandler(evt) {
    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length === 0) {
      evt.target.appendChild(draggedItem);
      draggedItem = null;
    }
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  }

  function onDragEnterHandler(evt) {
    if (evt.target.classList.contains('setup-artifacts-cell') && evt.target.children.length === 0) {
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  }

  function onDragLeaveHandler(evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  }

  window.addEventsForDragAndDrop = function () {
    shopElement.addEventListener('dragstart', onDragStartInShop);
    artifactsElement.addEventListener('dragstart', onDragStartInCell);
    artifactsElement.addEventListener('dragover', onDragOverHandler);
    artifactsElement.addEventListener('drop', onDropHandler);
    artifactsElement.addEventListener('dragenter', onDragEnterHandler);
    artifactsElement.addEventListener('dragleave', onDragLeaveHandler);
  };
  window.removeEventsForDragAndDrop = function () {
    shopElement.removeEventListener('dragstart', onDragStartInShop);
    artifactsElement.removeEventListener('dragstart', onDragStartInCell);
    artifactsElement.removeEventListener('dragover', onDragOverHandler);
    artifactsElement.removeEventListener('drop', onDropHandler);
    artifactsElement.removeEventListener('dragenter', onDragEnterHandler);
    artifactsElement.removeEventListener('dragleave', onDragLeaveHandler);
  };


})();
