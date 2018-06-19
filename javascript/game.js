class Game {
  constructor(grid,ctx){
    this.grid = grid;
    this.ctx = ctx;
  }

  move() {
    this.grid.grid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
        if (space !== 'b'){
          let moves = this.grid.getMoves(this.grid.grid,j,i);
          let direction = Math.floor(Math.random() * moves.length);
          let move = moves[direction];
          let oldSpot = this.grid.grid[i][j];
          let newSpot = this.grid.grid[i + move[0]][j + move[1]];
          this.grid.grid[i][j] = newSpot;
          this.grid.grid[i + move[0]][j + move[1]] = oldSpot;
          }

      });
    });

  }

  startSimulation() {
    this.grid.draw(this.ctx);
    this.move();
  }
}

export default Game;
