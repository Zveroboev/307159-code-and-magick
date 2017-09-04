'use strict';

(function () {
  var URL_SAVE = 'https://1510.dump.academy/code-and-magick';
  var URL_LOAD = 'https://1510.dump.academy/code-and-magick/data';

  function load(onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = 10000;
    xhr.open('GET', URL_LOAD);
    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.send();
  }

  function save(data, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.open('POST', URL_SAVE);
    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });
    xhr.send(data);
  }

  window.backend = {
    load: load,
    save: save
  };

})();
