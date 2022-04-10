import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
//import kaboom from "https://unpkg.com/kaboom@2000.0.0/dist/kaboom.mjs"
import {loadImage} from "./load.js"

kaboom({
  global: true,
  background: [ 0, 0, 0, ],
});

const offsetX = ((width()/2) - 150);
const offsetY = ((height()/2) - 150);

loadImage("tree");

scene("main", (args = {}) => {
  let count = 0;
  for (let y = 0; y < 3; y++)  {
    for (let x = 0; x < 3; x++) {
      count++;
      let spriteName = count.toString();
      add([
        sprite(spriteName),
        pos((x * 100) + offsetX, (y * 100) + offsetY),
        area(),
      ]);
    }
  }

  //an array , also a variable with the position of the empty space
});

go("main");