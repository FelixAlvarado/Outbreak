// var canvas = document.getElementById('canvas');
// var c = canvas.getContext('2d');
// c.fillStyle = "red";
// c.fillRect(0,0,40,40);


class Grid {
  constructor() {
    this.grid = this.generateGrid();
  }

generateGrid () {
  let placement = ['z','h','h','b','b','b','b'];
  let grid = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
  for (let i = 0; i < 15; i++) {
      while (grid[i].length < 20) {
        let random = placement[Math.floor(Math.random() * 7)];
            grid[i].push(random);
    }
  }
  return grid;
}

  draw(ctx) {
    this.grid.forEach((arr, i) => {
      arr.forEach((space,j) => {
        switch (space){
          case space === 'z':
          ctx.fillStyle = "red";
          ctx.fillRect(j*40,i*40,40,40);
          break;
          case space === 'h':
          ctx.fillStyle = "black";
          ctx.fillRect(j*40,i*40,40,40);
          break;
          case space === 'b':
          ctx.fillStyle = "white";
          ctx.fillRect(j*40,i*40,40,40);
          break;
        }
      });
  });
}

}

module.export = Grid;
