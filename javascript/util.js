export const valueValidity = (equalInfection, equalKill, equalEscape, personInfection,personKill, personEscape, zombieInfection, zombieKill, zombieEscape) => {

if(parseInt(equalInfection.value) + parseInt(equalKill.value) + parseInt(equalEscape.value) !== 100 || parseInt(personInfection.value) + parseInt(personKill.value) + parseInt(personEscape.value) !== 100 || parseInt(zombieInfection.value) + parseInt(zombieKill.value) + parseInt(zombieEscape.value) !== 100) {
  return true;
}
return false;
};

export const includesArray = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString() === item.toString()) {return true;}
  }
  return false;
};
