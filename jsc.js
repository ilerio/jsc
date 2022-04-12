import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
//import kaboom from "https://unpkg.com/kaboom@2000.0.0/dist/kaboom.mjs"
import {loadImage} from "./load.js"
import * as helper from "./helpers.js"

kaboom({
  global: true,
  background: [ 0, 0, 0, ],
});

const offsetX = ((width()/2) - 150);
const offsetY = ((height()/2) - 150);

loadImage("tree");

scene("main", (args = {}) => {
  let count = -1;
  let skip = 0;
  let tileArray = [1,2,3,4,5,6,7,8,9];
  let gameArray = [];

  helper.shuffleArray(tileArray);
  skip = tileArray[8];

  for (let y = 0; y < 3; y++)  {
    let arr = [];
    for (let x = 0; x < 3; x++) {
      count++;
      if (count === 8) {
        arr[x] = -1
        continue;
      }
      arr[x] = tileArray[count]
      let spriteName = tileArray[count].toString();
      add([
        sprite(spriteName),
        pos((x * 100) + offsetX, (y * 100) + offsetY),
        area(),
      ]);
    }
    gameArray[y] = arr;
  }

  
});

go("main");