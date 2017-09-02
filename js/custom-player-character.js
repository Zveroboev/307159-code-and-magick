'use strict';

(function () {
  // Смена цвета элементов персонажа
  var wizardAttributes = {
    wizardCoat: document.querySelector('.wizard-coat'),
    wizardFireball: document.querySelector('.setup-fireball-wrap'),
    wizardEyes: document.querySelector('.wizard-eyes')
  };

  var WIZARDS = window.CONSTATNS.WIZARDS_ATTRIBUTES;

  var coatCounter = window.util.makeCounter();
  var eyesCounter = window.util.makeCounter();
  var fireballCounter = window.util.makeCounter();

  function fillElement(element, color) {
    element.style.fill = color;
  }

  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
  }

  window.colorize(wizardAttributes.wizardCoat, coatCounter, WIZARDS.COAT_COLORS, fillElement);

  window.colorize(wizardAttributes.wizardEyes, eyesCounter, WIZARDS.EYES_COLORS, fillElement);

  window.colorize(wizardAttributes.wizardFireball, fireballCounter, WIZARDS.FIREBALL_COLORS, changeElementBackground);

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
