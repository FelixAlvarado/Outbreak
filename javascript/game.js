import * as Survival from './survival';

class Game {
  constructor(grid,ctx){
    this.grid = grid;
    this.ctx = ctx;
  }

  move() {
    const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));
    tempGrid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
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
      if(chance <= .5 ){this.grid.grid[y + move[0]][x + move[1]] = 'h';}
    }
  }

  zombieMove(y,x){
    let humans = Survival.getHumans(this.grid.grid,y,x);
    if (humans.length > 0){
      let human = humans[Math.floor(Math.random()* humans.length)];
      let chance = Math.random()*100;
      let zombies = Survival.getZombies(this.grid.grid,y,x);
      if (humans.length > zombies.length){
        if(chance < 30) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= 30 && chance < 65) {this.grid.grid[y][x] = 'b';}
      }
      if (humans.length === zombies.length){
        if(chance < 50) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= 50 && chance < 75) {this.grid.grid[y][x] = 'b';}
      }
      if (humans.length < zombies.length){
        if(chance < 70) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= 70 && chance < 85) {this.grid.grid[y][x] = 'b';}
      }
    }
  }

  startSimulation(){
    setInterval(this.process.bind(this),100);
    // this.process();
  }

  process() {
    this.grid.draw(this.ctx);
    this.move();
    this.encounter();
  }
}

export default Game;
