import Grid from './grid';
import Game from './game';

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  // ctx.fillStyle = "red";
  // ctx.fillRect(100,100,100,100);
  // let zombie = document.getElementById('zombie');
  const grid = new Grid();
  const game = new Game(grid,ctx);
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  start.addEventListener('click',() => {
    game.startSimulation();
  });
  // working on clearing interval
  // stop.addEventListener('click',() => {
  //   clearInterval(game.StartSimulation());
  //   game.StopInterval
  // });
});
