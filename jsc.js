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

let images = ["tree", "cat", "dog", "food", "pattern", "cowboy"]

loadImage(images[helper.getRandomInt(images.length-1)]);

scene("main", (args = {}) => {
  let count = -1;
  let skip = -1;
  let tileArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let gameArray = [];
  let yBlank = -1;
  let xBlank = -1;

  helper.shuffleArray(tileArray);
  skip = tileArray[8];

  for (let y = 0; y < 4; y++)  {
    let arr = [];
    for (let x = 0; x < 4; x++) {
      count++;
      if (count === 14) {
        arr[x] = -1;
        yBlank = y;
        xBlank = x;
        continue;
      }
      arr[x] = tileArray[count]
      let spriteName = tileArray[count].toString();
      add([
        sprite(spriteName),
        pos((x * 75) + offsetX, (y * 75) + offsetY),
        area(),
        "tile"
      ]);
    }
    gameArray[y] = arr;
  }

  function move(tile) {
 
    let x = worldPosToIndex(tile.pos).x
    let y = worldPosToIndex(tile.pos).y
    let difX = Math.abs(x - xBlank);
    let difY = Math.abs(y - yBlank);

    if (difX + difY === 1) {
      let tempY = y;
      let tempX = x;

      

      y = yBlank;
      x = xBlank;

      yBlank = tempY;
      xBlank = tempX;

      let movePos = indexToWorldPos(y, x)
      
      tile.pos = indexToWorldPos(y, x).pos
    }
  }

  function worldPosToIndex(worldPos) {
    let y = 0;
    let x = 0;

    y = Math.floor((worldPos.y - offsetY) / 75);
    x = Math.floor((worldPos.x - offsetX) / 75);

    return {"y": y, "x": x};
  }

  function indexToWorldPos(indexY, indexX) {
    let y = 0;
    let x = 0;

    y = (indexY*75) + offsetY;
    x = (indexX*75) + offsetX;

    return pos(x,y);
  }

  onClick("tile", (tile) => {
    move(tile);
  });
});

go("main");