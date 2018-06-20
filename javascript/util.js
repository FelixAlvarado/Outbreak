export const valueValidity = (equalInfection, equalKill, equalEscape, personInfection,personKill, personEscape, zombieInfection, zombieKill, zombieEscape) => {

if(parseInt(equalInfection.value) + parseInt(equalKill.value) + parseInt(equalEscape.value) !== 100 || parseInt(personInfection.value) + parseInt(personKill.value) + parseInt(personEscape.value) !== 100 || parseInt(zombieInfection.value) + parseInt(zombieKill.value) + parseInt(zombieEscape.value) !== 100) {
  return true;
}
return false;
};

// export const circle = (ctx,x,y) => {
//     ctx.beginPath();
//     ctx.arc(x, y, 20, 0, 2 * Math.PI);
//     ctx.stroke();
// };
