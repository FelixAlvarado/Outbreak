import * as Survival from './survival';

class Game {
  constructor(grid,ctx){
    this.grid = grid;
    this.ctx = ctx;
    // this.process = setInterval(() => this.procedures);
  }

  move() {
    let zombieCount = 0;
    let humanCount = 0;
    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));
    tempGrid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
        if (space === 'z'){zombieCount++;}
        if (space === 'h'){humanCount++;}
        if (space !== 'b'){
          let moves = this.grid.getMoves(tempGrid,i,j);
          if(moves.length > 0){
            let direction = Math.floor(Math.random() * moves.length);
            let move = moves[direction];
              if(this.grid.grid[i + move[0]][j + move[1]] === 'b'){
                let oldSpot = tempGrid[i][j];
                let newSpot = tempGrid[i + move[0]][j + move[1]];
                this.grid.grid[i][j] = newSpot;
                this.grid.grid[i + move[0]][j + move[1]] = oldSpot;
              }
            }
          }

      });
    });
    this.endGame(humanCount,zombieCount);
  }

  endGame(human,zombie) {
    if (human === 0  || zombie === 0){
      clearInterval(this.process);
      this.grid.grid = this.grid.generateGrid();
      this.ctx.font = "75px Arial";
      this.ctx.fillStyle = "blue";
      if (human === 0) {this.ctx.fillText("Zombies Win!",170,320);}
      if (zombie === 0) {this.ctx.fillText("The People Survived!",40,320);}
    }
  }

  updateGrid(x,y) {
    const newX = (x % 20) / 20;
    const newY = (y % 20) / 20;
    this.grid.grid[newY][newX] = 'z';
  }

  encounter() {
    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));
    this.grid.grid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
        if (space !== 'b'){
          if(this.grid.grid[i][j] === 'z') {this.zombieMove(i,j);}
          if(this.grid.grid[i][j] === 'h') {this.humanMove(i,j);}
        }
    });
  });
  }

  humanMove(y,x){
    let zombies = Survival.getZombies(this.grid.grid,y,x);
    let moves = this.grid.getMoves(this.grid.grid,y,x);
    if (zombies.length === 0 && moves.length > 0){
      let move = moves[Math.floor(Math.random() * moves.length)];
      let chance = Math.random()*100;
      if(chance <= this.survivalFind){this.grid.grid[y + move[0]][x + move[1]] = 'h';}
    }
  }

  zombieMove(y,x){
    let humans = Survival.getHumans(this.grid.grid,y,x);
    if (humans.length > 0){
      let human = humans[Math.floor(Math.random()* humans.length)];
      let chance = Math.random()*100;
      let zombies = Survival.getZombies(this.grid.grid,y,x);
      if (humans.length > zombies.length){
        if(chance < this.personInfection) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= this.personInfection && chance < this.personInfection + this.personKill) {this.grid.grid[y][x] = 'b';}
      }
      if (humans.length === zombies.length){
        if(chance < this.equalInfection) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= this.equalInfection && chance < this.equalInfection + this.equalKill)
        console.log(this.equalInfection + this.equalKill); {this.grid.grid[y][x] = 'b';}
      }
      if (humans.length < zombies.length){
        if(chance < this.zombieInfection) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= this.zombieInfection && chance < this.zombieInfection + this.zombieKill) {this.grid.grid[y][x] = 'b';}
      }
    }
  }

    startSimulation(equalInfection, equalKill, personInfection,personKill, zombieInfection, zombieKill,survivalFind, simSpeed){
      this.equalInfection = parseInt(equalInfection.value);
      this.equalKill = parseInt(equalKill.value);
      this.personInfection = parseInt(personInfection.value);
      this.personKill = parseInt(personKill.value);
      this.zombieInfection = parseInt(zombieInfection.value);
      this.zombieKill = parseInt(zombieKill.value);
      this.survivalFind = parseInt(survivalFind.value);
      this.simSpeed = parseInt(simSpeed.value * 1000);
      clearInterval(this.process);
      this.process = setInterval(this.procedures.bind(this), this.simSpeed);
    }

    pauseSimulation() {

      clearInterval(this.process);
    }

    resetSimulation() {
      this.ctx.clearRect(0,0,800,600);
      clearInterval(this.process);
      this.grid.grid = this.grid.generateGrid();
    }


    procedures() {
      this.grid.draw(this.ctx);
      this.move();
      this.encounter();
    }
}

export default Game;
