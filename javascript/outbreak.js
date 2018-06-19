const Grid = require('./grid');

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  // ctx.fillStyle = "red";
  // ctx.fillRect(100,100,100,100);
  new Grid().draw(ctx);
});
