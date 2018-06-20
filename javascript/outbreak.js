import Grid from './grid';
import Game from './game';

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  // let zombie = document.getElementById('zombie');
  const grid = new Grid();
  const game = new Game(grid,ctx);
  const start = document.getElementById('start');
  const pause = document.getElementById('pause');
  const reset = document.getElementById('reset');

  start.addEventListener('click',() => {
    game.startSimulation();
  });

  pause.addEventListener('click',() => {
    game.pauseSimulation();
  });

  reset.addEventListener('click',() => {
    game.resetSimulation();
  });


  let instructions = document.getElementById("modal-background");
  let openI = document.getElementById("instructions");
  let close = document.getElementById("close");

  openI.addEventListener("click", () => {
    instructions.style.display = "block";
  });
  //find out why this is null
  // close.addEventListener("click", () =>{
  //   instructions.style.display = "none";
  // });

  window.addEventListener("click", (e) => {
    if (e.target === instructions){
      instructions.style.display = "none";
    }
  });
});
