class Game {
  constructor(grid,ctx){
    this.grid = grid;
    this.ctx = ctx;
  }

  move() {
    this.grid.grid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
        let moves = this.grid.getMoves(this.grid,i,j);
        if (moves.length > 0) {
          let direction = Math.floor(Math.random() * moves.length);
          let oldSpot = this.grid[i][j];
          let newSpot = this.grid[i + moves[direction][0]][j + moves[direction[1]]];
          this.grid[i][j] = newSpot;
          this.grid[i + moves[direction][0]][j + moves[direction[1]]] = oldSpot;
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
