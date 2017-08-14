'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', 120, 35);
  ctx.fillText('Список результатов:', 120, 55);

  var maxTime = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var initialX = 150;
  var initialY = 245;
  var barWidth = 40;
  var barSpaceWithout = 50;
  var barSpaceTotal = barWidth + barSpaceWithout;
  var color = {
    'format': 'hsl',
    'hue': 240,
    'saturation': function () {
      return Math.random() * 101 + '%';
    },
    'lightness': '50%',
    'getRandomColor': function () {
      return this.format + '(' + this.hue + ', ' + this.saturation() + ', ' + this.lightness + ')';
    }
  };

  step = -step; // Делаю значение отрицательным т.к. диаграмма строится снизу-вверх, а для этого нужно отрицательное значение высоты.

  for (i = 0; i < times.length; i++) {
    var barHeight = times[i] * step;

    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : color.getRandomColor();
    ctx.fillRect(initialX + barSpaceTotal * i, initialY, barWidth, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + barSpaceTotal * i, initialY + 5);
    ctx.fillText(Math.round(times[i]), initialX + barSpaceTotal * i, initialY + barHeight - 20);
  }
};
