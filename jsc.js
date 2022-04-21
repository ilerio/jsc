import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
//import kaboom from "https://unpkg.com/kaboom@2000.0.0/dist/kaboom.mjs"
import {loadImage} from "./load.js"
import * as helper from "./helper.js"

kaboom({
  global: true,
  background: [ 0, 0, 0, ],
});

const offsetX = ((width()/2) - 150);
const offsetY = ((height()/2) - 150);

let images = ["tree", "cat", "dog", "food", "pattern", "cowboy"];
let selectedImage = images[helper.getRandomInt(images.length-1)];

loadImage(selectedImage);

scene("main", (args = {}) => {
  let count = -1;
  let initArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let gameArray = [...initArray];
  let blank = -1;
  let xBlank = -1;
  let yBlank = -1;
  const size = 75;
  const referenceIndex = 5
  const tileCount = 4;

  helper.shuffleArray(gameArray);
  let i = 0;
  do {
    if (gameArray[i] === 16) blank = i;
    i++;
  } while (blank === -1 && i < gameArray.length);

  for (let y = 0; y < tileCount; y++)  {
    for (let x = 0; x < tileCount; x++) {
      count++;
      if (count === blank) {
        yBlank = y;
        xBlank = x;
        continue;
      }
      let spriteName = gameArray[count].toString();
      add([
        sprite(spriteName),
        pos((x * size) + offsetX, (y * size) + offsetY),
        area(),
        "tile"
      ]);
    }
  }

  // Reference Image
  add([
    sprite(selectedImage),
    pos((referenceIndex*size) + offsetX, offsetY),
    scale(.5)
  ]);

  function move(tile) {
 
    let x = worldPosToIndex(tile.pos).x
    let y = worldPosToIndex(tile.pos).y
    let difX = Math.abs(x - xBlank);
    let difY = Math.abs(y - yBlank);

    if (difX + difY === 1) {
      let tempY = y;
      let tempX = x;
      let blankIndex = index3dto2d(yBlank,xBlank);
      let selectedIndex = index3dto2d(y,x);
      let tempNum = gameArray[blankIndex];

      gameArray[blankIndex] = gameArray[selectedIndex];
      gameArray[selectedIndex] = tempNum;

      y = yBlank;
      x = xBlank;

      yBlank = tempY;
      xBlank = tempX;
      
      tile.pos = indexToWorldPos(y, x).pos

      isMoveWin();
    }
  }

  function index3dto2d(yIn, xIn) {
    let count = -1; 
    for (let y = 0; y < tileCount; y++) {
      for (let x = 0; x < tileCount; x++) {
        count++;
        if (y === yIn && x === xIn) return count;
      }
    }
    return -1;
  }

  function worldPosToIndex(worldPos) {
    let y = 0;
    let x = 0;

    y = Math.floor((worldPos.y - offsetY) / size);
    x = Math.floor((worldPos.x - offsetX) / size);

    return {"y": y, "x": x};
  }

  function indexToWorldPos(indexY, indexX) {
    let y = 0;
    let x = 0;

    y = (indexY*size) + offsetY;
    x = (indexX*size) + offsetX;

    return pos(x,y);
  }

  function isMoveWin() {
    if (helper.arraysIdentical(initArray, gameArray)) {
      win();
    } else {
      notWin();
    }
  }

  function win() {
    add ([
      text("You've got it!", {size: 18}),
      pos((referenceIndex*size) + offsetX, (2*size) + offsetY + 5),
      "win"
    ]);

    const btn = add([
      text("new game?", {size: 18}),
      pos((referenceIndex*size) + offsetX, (2*size) + offsetY + 25),
      "win",
      "win-btn",
      area()
    ]);

    onHover("win-btn", (btn) => {
      btn.color = rgb(0,255,0);
      btn.scale = vec2(1.25);
    }, (btn) => {
      btn.color = rgb(255,255,255);
      btn.scale = vec2(1);
    });
  }

  onClick("win-btn", (btn) => {
    location.reload();
  });

  function notWin() {
    destroyAll("win");
  }

  onClick("tile", (tile) => {
    move(tile);
  });
});

go("main");