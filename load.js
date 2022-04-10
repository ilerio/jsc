export function loadImage(image) {
  loadSpriteAtlas("/sprites/"+image+".jpg", {
    "1": {
      "x": 0,
      "y": 0,
      "width": 100,
      "height": 100
    },
    "2": {
      "x": 100,
      "y": 0,
      "width": 100,
      "height": 100
    },
    "3": {
      "x": 200,
      "y": 0,
      "width": 100,
      "height": 100
    },
    "4": {
      "x": 0,
      "y": 100,
      "width": 100,
      "height": 100
    },
    "5": {
      "x": 100,
      "y": 100,
      "width": 100,
      "height": 100
    },
    "6": {
      "x": 200,
      "y": 100,
      "width": 100,
      "height": 100
    },
    "7": {
      "x": 0,
      "y": 200,
      "width": 100,
      "height": 100
    },
    "8": {
      "x": 100,
      "y": 200,
      "width": 100,
      "height": 100
    },
    "9": {
      "x": 200,
      "y": 200,
      "width": 100,
      "height": 100
    },
  });
}