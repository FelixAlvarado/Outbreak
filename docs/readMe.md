# Outbreak

### Overview

This project is a simulation of a zombie outbreak. It was inspired by [Conway's Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), which features the life and death of cells based on their neighbors .

Both people and zombies will reside on a field where they can move one unit up,down, left, or right during each turn. Zombies chase the nearest person while people run away.

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

- [ ] Instructions stating how the simulation works

### Wireframes

Outbreak will be a single page with different buttons and inputs that the user can use.

Start, pause, reset buttons, as well as a speed toggle will be on top of the canvas display.

Underneath, there will be an explaination of the percentages. The percentage inputs will already be filled out with default values that the user can change. If there are incorrect or blank values, the user will be alerted and the simulation won't start. The user can also press the reset button to revert back to default settings.

![](https://s22.postimg.cc/ekiv7z041/wireframe_2.png)

### Architecture and Technologies

* Vanilla Javascicpt for game logic

* HTML5 Canvas for rendering

* Webpack for bundling

The following files will be used for making the game:

* grid.js: used for updating the display grid

* survival.js: holds the logic for what happens during a player/zombie encounter

* game.js: used for updating the positions of each field item

### Timeline

##### Over the weekend:
Have webpack and canvas initially set up

##### Day1:
Write the grid and game logic, being sure that items are moving and render at a set interval:
- [ ] Canvas is rendering items properly
- [ ] Grid renders items at random positions
- [ ] Items on the field move at a set interval

##### Day2:
Complete survival logic so zombie encounters are handled:
- [ ] Human/Zombie encounter can result in all three outcome
- [ ] There is a start user interaction

##### Day3:
Add aditional user features:
- [ ] There is a pause and reset button
- [ ] The user can modify the speed of the simulation
- [ ] Game survival percentages are changed based on user input

##### Day4:
Add finished touches for app appeal:
- [ ] CSS makes the app look clean and polished
- [ ] Alerts are added for if the user puts incorrect values
- [ ] There is a reset value button
- [ ] Explainations and overviews are added

### Bonus Features

If there is time, I will add the following features:
- [ ] Energy levels that can decrease if the person encounters a zombie. Would affect thier survaval rate
- [ ] Weapon find percentages that increase a person's chance of survival
- [ ] A mutation attribute that would increase the zombie's chance of infection
- [ ] The ability to increase the grid size
