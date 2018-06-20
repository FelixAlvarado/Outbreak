import Grid from './grid';
import Game from './game';
import * as Util from './util';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const zombie = document.getElementById('zombie');
  const human = document.getElementById('human');
  const grid = new Grid(zombie, human);
  const game = new Game(grid,ctx);
  const start = document.getElementById('start');
  const pause = document.getElementById('pause');
  const reset = document.getElementById('reset');

  canvas.addEventListener("click", (e) => {
    const x = e.clientX - canvas.offsetLeft + 400;
    const y = e.clientY - canvas.offsetTop + 300;
    game.updateGrid(x,y);
  });

  start.addEventListener('click',() => {
    if (Util.valueValidity(equalInfection, equalKill, equalEscape, personInfection,personKill, personEscape, zombieInfection, zombieKill, zombieEscape)) {
      alert('All percentages for each row must add to equal 100!');
      return;
    }
    if (parseInt(survivalFind.value) < 0 || parseInt(survivalFind.value) > 100){
      alert('Survival Find must be between 0 and 100!');
      return;
    }

    if (parseInt(simSpeed.value) < 0) {
      alert('Speed Must be greater than 0');
      return;
    }

    game.startSimulation(equalInfection, equalKill, personInfection,personKill, zombieInfection, zombieKill,survivalFind, simSpeed);
  });

  pause.addEventListener('click',() => {
    game.pauseSimulation();
  });

  reset.addEventListener('click',() => {
    game.resetSimulation();
  });

  const instructions = document.getElementById("instruction-background");
  const openI = document.getElementById("openI");
  const close = document.getElementById("close");

  openI.addEventListener("click", () => {
    instructions.style.display = "block";
  });

  close.addEventListener("click", () =>{
    instructions.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === instructions){
      instructions.style.display = "none";
    } else if (e.target === customize){
      customize.style.display = "none";
    }
  });

  const customize = document.getElementById("customize-background");
  const openC = document.getElementById("openC");
  const closeC = document.getElementById("closeC");

  openC.addEventListener("click", () => {
    customize.style.display = "block";
  });

  closeC.addEventListener("click", () =>{
    customize.style.display = "none";
  });

  const equalInfection = document.getElementById('equalInfection');
  equalInfection.value = 50;
  const equalKill = document.getElementById('equalKill');
  equalKill.value = 25;
  const equalEscape = document.getElementById('equalEscape');
  equalEscape.value = 25;

  const personInfection = document.getElementById('personInfection');
  personInfection.value = 30;
  const personKill = document.getElementById('personKill');
  personKill.value = 35;
  const personEscape = document.getElementById('personEscape');
  personEscape.value = 35;

  const zombieInfection = document.getElementById('zombieInfection');
  zombieInfection.value = 70;
  const zombieKill = document.getElementById('zombieKill');
  zombieKill.value = 15;
  const zombieEscape = document.getElementById('zombieEscape');
  zombieEscape.value = 15;

  const survivalFind = document.getElementById('survivalFind');
  survivalFind.value = .5;

  const simSpeed = document.getElementById('simSpeed');
  simSpeed.value = .1;

  const resetSettings = document.getElementById('resetSettings');
  resetSettings.addEventListener('click', () => {
      equalInfection.value = 50;
      equalKill.value = 25;
      equalEscape.value = 25;
      personInfection.value = 30;
      personKill.value = 35;
      personEscape.value = 35;
      zombieInfection.value = 70;
      zombieKill.value = 15;
      zombieEscape.value = 15;
      survivalFind.value = .5;
      simSpeed.value = .1;
  });





});
