export const getZombies = (grid,y,x) => {
  let zombies = [];
  if (y > 0 && grid[y-1][x] === 'z') {zombies.push([y-1,x]);}
  if (y < 29 && grid[y+1][x] === 'z') {zombies.push([y+1,x]);}
  if (x > 0 && grid[y][x-1] === 'z') {zombies.push([y,x-1]);}
  if (x < 39 && grid[y][x+1] === 'z') {zombies.push([y,x+1]);}
  return zombies;
};

export const getHumans = (grid,y,x) => {
  let humans = [];
  if (y > 0 && grid[y-1][x] === 'h') {humans.push([y-1,x]);}
  if (y < 29 && grid[y+1][x] === 'h') {humans.push([y+1,x]);}
  if (x > 0 && grid[y][x-1] === 'h') {humans.push([y,x-1]);}
  if (x < 39 && grid[y][x+1] === 'h') {humans.push([y,x+1]);}
  return humans;
};
