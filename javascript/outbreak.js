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
  const peopleButton = document.getElementById('addPeople');
  const zombieButton = document.getElementById('addZombies');
  let clickItem = 'none';

  peopleButton.addEventListener("click", () => {
    clickItem = 'h';
    //trying to modify button css with add people
    // peopleButton.style.backgroundColor = "#19191c";
    // zombieButton.style.backgroundColor = "#4f1d4f";
    // zombieButton.addEventListener("mouseover", () => {
    //   zombieButton.style.backgroundColor = " #a020a0";
    // });
    // zombieButton.addEventListener("mouseleave", () => {
    //   if (zombieButton.style.backgroundColor === " #a020a0") {
    //   zombieButton.style.backgroundColor = " #4f1d4f";
    // }
    // });
  });

  zombieButton.addEventListener("click", () => {
    clickItem = 'z';
    // zombieButton.style.backgroundColor = "#19191c";
    // peopleButton.style.backgroundColor = "#3d3a3d";
  });

  canvas.addEventListener("click", (e) => {
    if (clickItem !== 'none') {
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;

    game.updateGrid(x,y, clickItem);
    }
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
  personInfection.value = 25;
  const personKill = document.getElementById('personKill');
  personKill.value = 50;
  const personEscape = document.getElementById('personEscape');
  personEscape.value = 25;

  const zombieInfection = document.getElementById('zombieInfection');
  zombieInfection.value = 60;
  const zombieKill = document.getElementById('zombieKill');
  zombieKill.value = 20;
  const zombieEscape = document.getElementById('zombieEscape');
  zombieEscape.value = 20;

  const survivalFind = document.getElementById('survivalFind');
  survivalFind.value = .5;

  const simSpeed = document.getElementById('simSpeed');
  simSpeed.value = .1;

  const resetSettings = document.getElementById('resetSettings');
  resetSettings.addEventListener('click', () => {
      equalInfection.value = 50;
      equalKill.value = 25;
      equalEscape.value = 25;
      personInfection.value = 25;
      personKill.value = 50;
      personEscape.value = 25;
      zombieInfection.value = 60;
      zombieKill.value = 20;
      zombieEscape.value = 20;
      survivalFind.value = .5;
      simSpeed.value = .1;
  });





});
