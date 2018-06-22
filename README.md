# Outbreak

### Overview

This project is a simulation of a zombie outbreak. It was inspired by [Conway's Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), which features the life and death of cells based on their neighbors .

Both people and zombies will reside on a field where they can move one unit up,down, left, or right during each turn. Zombies chase the nearest person while people run away from them.

Each turn, a person has a 10% chance of finding another survivor as long as there are no adjacent zombies.

If a person and a zombie are adjacent to one another, there is a 50% change of the person getting bit, causing them to turn into a zombie themselves. There is 25% chance of the person escaping the attack, and there is a 25% change of the person killing the zombie.

When a person has more adjacent people than the zombie has adjacent zombies, their survival percentages are tweeked to be in their favor. Their survival percentages decreased if the zombie has more adjacent zombies than the person has adjacent people.

# Technologies

* javaScript
* HTML Canvas
* Vanilla DOM 

# Key Features

### Chase and Movement Logic

With each phase of movement, people move away from zombies while zombies move toward people. Rather than using two different functions to determine the spots based on who is about to move, I integrated them into one by switching modifying the function based on who is about to move.

```javaScript 
closeMoves(grid,y,x,arr) {
    let type;
    if (grid[y][x] === 'z'){
      type = 'h';
    } else {
      type = 'z';
    }
    let newArr = [];
    for (let i = y - 10; i <= y + 10; i++) {
      for (let j = x - 10; j <= x + 10; j++) {
        if(i > 0 && j > 0 && i < 30 && j < 40){
        const abs = Math.abs(y - i) + Math.abs(x - j);
        if (grid[i][j] === type && abs <= 10){
          if (i === y && j > x){
            if (includesArray(arr,[0,1]) && type === 'h'){newArr.push([abs,[0,1]]);}
            if (includesArray(arr,[0,-1]) && type === 'z'){newArr.push([abs,[0,-1]]);}
          }
```
At this point, I determined the type of the current player and used that in and algorithm that chooses the best spot to move based on the current player. The algorithm itself finds all items on interest within a 10 move radius and adds moves into a potential move array, that is later shortened into a list of moves based on which item of interest is the closest.

For movement, I utilized a deeply dupped temporary grid, because working with one grid would cause objects who move right or down to move again.

```javaScript 
const tempGrid = JSON.parse(JSON.stringify( this.grid.grid ));
    tempGrid.forEach((arr, i) =>{
      arr.forEach((space, j) => {
        if (space === 'z'){zombieCount++;}
        if (space === 'h'){humanCount++;}
        if (space !== 'b'){
          let moves = this.grid.getMoves(tempGrid,i,j,space);
          if(moves.length > 0){
            let direction = Math.floor(Math.random() * moves.length);
            let move = moves[direction];
              if(this.grid.grid[i + move[0]][j + move[1]] === 'b'){
                let oldSpot = tempGrid[i][j];
                let newSpot = tempGrid[i + move[0]][j + move[1]];
                this.grid.grid[i][j] = newSpot;
                this.grid.grid[i + move[0]][j + move[1]] = oldSpot;
              }
```

In this code, potential moves are determined by the temperary grid and used to update the real grid for each item on each phase.

### Statistical Modification

Outbreak allows players to manipulate every aspect of a zombie encounter however they'd like. The following table shows things that the player can modify:

![](https://s15.postimg.cc/fbfv0iksr/Screen_Shot_2018-06-22_at_10.04.51_AM.png)

A major factor for encounters is the amount of neighbors a zombie or person has. In the following code, the amount of neighbors each party has is calculated, and used to enforce a certain probablility: 

```javaScript 
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
         {this.grid.grid[y][x] = 'b';}
      }
      if (humans.length < zombies.length){
        if(chance < this.zombieInfection) {this.grid.grid[human[0]][human[1]] = 'z';}
        if (chance >= this.zombieInfection && chance < this.zombieInfection + this.zombieKill) {this.grid.grid[y][x] = 'b';}
      }
  ```
  At this point, the player input from the table has already been converted as a class variable, making it assessible both here, and other places where the inputs are needed.
  
  # Things to Note

In the near future, I plan on coming back to this project and adding new features. These include:

* Making zombie intelligence a trait the player can modify
* Adding stamia to people so they can only run for so long before getting tired
* Adding energy to zombies so they die out if they have not eaten
  
