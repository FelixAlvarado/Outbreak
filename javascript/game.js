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
          let moves = this.grid.getMoves(tempGrid,j,i);
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


  startSimulation(){
    setInterval(this.process.bind(this),100);
  }

  process() {
    this.grid.draw(this.ctx);
    this.move();
  }
}

export default Game;
