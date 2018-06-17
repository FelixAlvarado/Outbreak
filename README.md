# Outbreak

### Overview

This project is a simulation of a zombie outbreak.

Both people and zombies will reside on a field where they can move one unit up,down, left, or right during each turn.

Each turn, a person has a 10% chance of finding another survivor as long as there are no adjacent zombies.

If a person and a zombie are adjacent to one another, there is a 50% change of the person getting bit, causing them to turn into a zombie themselves. There is 25% chance of the person escaping the attack, and there is a 25% change of the person killing the zombie.

When a person has more adjacent people than the zombie has adjacent zombies, their survival percentages are tweeked to be in their favor. Their survival percentages decreased if the zombie has more adjacent zombies than the person has adjacent people.

### MVPS

In Outbreak, users will be able to:

- [ ] Start, pause, and reset the simulation
- [ ] Modify the speed of the simulation
- [ ] Modify the starting number of people and zombies
- [ ] Start the simulation with default percentages
- [ ] Modify the survival and find percentages

Outbreak will also include: 

- [ ] instructions stating how the simulation works
