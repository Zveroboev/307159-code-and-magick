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

  var getHSL = function (hue, saturation, lightness) {
    return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  };
  var maxTime = Math.max.apply(null, times);
  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var initialX = 150;
  var initialY = 245;
  var barWidth = 40;
  var barSpaceWithout = 50;
  var barSpaceTotal = barWidth + barSpaceWithout;
  var textIndent = 20;

  for (var i = 0; i < times.length; i++) {
    var barHeight = times[i] * step;

    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getHSL(240, Math.round(Math.random() * 100), 50);
    ctx.fillRect(initialX + barSpaceTotal * i, initialY, barWidth, -barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + barSpaceTotal * i, initialY + textIndent / 2);
    ctx.fillText(Math.round(times[i]), initialX + barSpaceTotal * i, initialY - barHeight - textIndent);
  }
};
