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
  let tileArray = [1,2,3,4,5,6,7,8,9];
  let gameArray = [];
  let yBlank = -1;
  let xBlank = -1;

  helper.shuffleArray(tileArray);
  skip = tileArray[8];

  for (let y = 0; y < 3; y++)  {
    let arr = [];
    for (let x = 0; x < 3; x++) {
      count++;
      if (count === 8) {
        arr[x] = -1;
        yBlank = y;
        xBlank = x;
        continue;
      }
      arr[x] = tileArray[count]
      let spriteName = tileArray[count].toString();
      add([
        sprite(spriteName),
        pos((x * 100) + offsetX, (y * 100) + offsetY),
        area(),
        "tile"
      ]);
    }
    gameArray[y] = arr;
  }

  function move(tile) {
    // console.log("yBlank: " + yBlank + " xBlank: " + xBlank);
    // return;
 
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

      console.log("yIndex: " + indexToWorldPos(y, x).y + " xIndex: " + indexToWorldPos(y, x).x);
      //tile.pos = indexToWorldPos(y, x)
    }
  }

  function worldPosToIndex(worldPos) {
    let y = 0;
    let x = 0;

    y = Math.floor((worldPos.y - offsetY) / 100);
    x = Math.floor((worldPos.x - offsetX) / 100);

    return {"y": y, "x": x};
  }

  function indexToWorldPos(indexY, indexX) {
    let y = 0;
    let x = 0;

    y = (indexY*100) + offsetY;
    x = (indexX*100) + offsetX;

    return pos(x,y);
  }

  onClick("tile", (tile) => {
    move(tile);
    console.log("world-y: " + mousePos().y + " world-x: " + mousePos().x)
    console.log("index-y: " + worldPosToIndex(mousePos()).y + " index-x: " + worldPosToIndex(mousePos()).x)
  });
});

go("main");