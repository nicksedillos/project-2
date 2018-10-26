const zombieVision = [
  "-1,-1" /* start of first cirle */,
  "0,-1",
  "1,-1",
  "1,0",
  "1,1",
  "0,1",
  "-1,1",
  "-1,0" /* end of first cirle */,
  "-2,-2" /* start of second cirle */,
  "-1,-2",
  "0,-2",
  "1,-2",
  "2,-2",
  "2,-1",
  "2,0",
  "2,1",
  "2,2",
  "1,2",
  "0,2",
  "-1,2",
  "-2,2",
  "-2,1",
  "-2,0",
  "-2,-1" /* end of second cirle */,
  "-1,-3" /* start of third fancy cirle */,
  "0,-3",
  "1,-3",
  "3,-1",
  "3,0",
  "3,1",
  "1,3",
  "0,3",
  "-1,3",
  "3,-1",
  "3,0",
  "3,-1" /* end of third fancy circle */
];

const normalVision = [
  "-1,-1",
  "0,-1",
  "1,-1",
  "1,0",
  "1,1",
  "0,1",
  "-1,1",
  "-1,0"
];

// player object
var player = {
  name: "",
  infected: false,
  position: "",
  vision: []
};

getZombieVision = player => {
  console.log("Calculating zombie vision");
  // current position pushed to the array right away
  player.vision.push(player.position);
  let currentPositionArray = player.position.split(",");
  zombieVision.forEach(function(visibleSquare) {
    let visibleSquareArray = visibleSquare.split(",");
    let newVisionX =
      parseInt(visibleSquareArray[0]) + parseInt(currentPositionArray[0]);
    let newVisionY =
      parseInt(visibleSquareArray[1]) + parseInt(currentPositionArray[1]);
    // making sure coordinates are in bounds of the grid
    if (
      newVisionX > 0 &&
      newVisionX < 18 &&
      newVisionY > 0 &&
      newVisionY < 13
    ) {
      player.vision.push(`${newVisionX},${newVisionY}`);
    }
  });
  console.log([player]); /* testing purpose */
};

getNormalVision = player => {
  console.log("\nCalculating normal vision...\n");
  // current position pushed to the array right away
  player.vision.push(player.position);
  let currentPositionArray = player.position.split(",");
  normalVision.forEach(function(visibleSquare) {
    let visibleSquareArray = visibleSquare.split(",");
    let newVisionX =
      parseInt(visibleSquareArray[0]) + parseInt(currentPositionArray[0]);
    let newVisionY =
      parseInt(visibleSquareArray[1]) + parseInt(currentPositionArray[1]);
    // making sure coordinates are in bounds of the grid
    if (
      newVisionX > 0 &&
      newVisionX < 18 &&
      newVisionY > 0 &&
      newVisionY < 13
    ) {
      player.vision.push(`${newVisionX},${newVisionY}`);
    }
  });
  console.log([player]); /* testing purpose */
};

renderFog = player => {
  console.log('\nDetermining fog...\n');
  let fog = [];
  for (let i = 1; i < 18; i++) {
    for (let j = 1; j < 13; j++) {
      if ( !(player.vision).includes(`${i},${j}`) ) {
        fog.push(`${i},${j}`);
      }
    }
  }
  console.log(fog);
}

renderVision = player => {
  // if they are a zombie
  if (player.infected === true) {
    let currentPosition = player.position;
    // should update player.vision
    getZombieVision(player);
    renderFog(player);
    // else they are a player
  } else {
    let currentPosition = player.position;
    // should update the player.vision
    getNormalVision(player);
    renderFog(player);
  }
};

/* created bob for testing purposes */
var player1 = {
  name: 'Bob',
  infected: false,
  position: '1,1',
  vision: []
};

/* testing purposes */
renderVision(player1);
