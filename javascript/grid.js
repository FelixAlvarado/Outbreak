// var canvas = document.getElementById('canvas');
// var c = canvas.getContext('2d');
// c.fillStyle = "red";
// c.fillRect(0,0,40,40);


class Grid {
  constructor() {
    this.grid = this.generateGrid();
  }

generateGrid () {
  let placement = ['z','h','h','h','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'];
  let grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  for (let i = 0; i < 30; i++) {
      while (grid[i].length < 40) {
        let random = placement[Math.floor(Math.random() * 40)];
            grid[i].push(random);
    }
  }
  return grid;
}

  getMoves(grid,x,y) {
    let result = [];
    if (y > 0 && grid[y-1][x] === 'b') {result.push([-1,0]);}
    if (y < 29 && grid[y+1][x] === 'b') {result.push([1,0]);}
    if (x > 0 && grid[y][x-1] === 'b') {result.push([0,-1]);}
    if (x < 39 && grid[y][x+1] === 'b') {result.push([0,1]);}
    return result;
  }

  draw(ctx) {
    this.grid.forEach((arr, i) => {
      arr.forEach((space, j) => {
        switch (space){
          case 'z':
          ctx.fillStyle = "red";
          // ctx.drawImage(zombie,j*20,i*20,20,20);
          ctx.fillRect(j*20,i*20,20,20);
          break;
          case 'h':
          ctx.fillStyle = "black";
          ctx.fillRect(j*20,i*20,20,20);
          break;
          case 'b':
          ctx.fillStyle = "white";
          ctx.fillRect(j*20,i*20,20,20);
          break;
        }
      });
  });
}

}

export default Grid;
