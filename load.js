export function loadImage(image) {
  loadSprite(image, "/sprites/"+image+".jpg");
  loadSpriteAtlas("/sprites/"+image+".jpg", {
    "1": {
      "x": 0,
      "y": 0,
      "width": 75,
      "height": 75
    },
    "2": {
      "x": 75,
      "y": 0,
      "width": 75,
      "height": 75
    },
    "3": {
      "x": 150,
      "y": 0,
      "width": 75,
      "height": 75
    },
    "4": {
      "x": 225,
      "y": 0,
      "width": 75,
      "height": 75
    },
    "5": {
      "x": 0,
      "y": 75,
      "width": 75,
      "height": 75
    },
    "6": {
      "x": 75,
      "y": 75,
      "width": 75,
      "height": 75
    },
    "7": {
      "x": 150,
      "y": 75,
      "width": 75,
      "height": 75
    },
    "8": {
      "x": 225,
      "y": 75,
      "width": 75,
      "height": 75
    },
    "9": {
      "x": 0,
      "y": 150,
      "width": 75,
      "height": 75
    },
    "10": {
      "x": 75,
      "y": 150,
      "width": 75,
      "height": 75
    },
    "11": {
      "x": 150,
      "y": 150,
      "width": 75,
      "height": 75
    },
    "12": {
      "x": 225,
      "y": 150,
      "width": 75,
      "height": 75
    },
    "13": {
      "x": 0,
      "y": 225,
      "width": 75,
      "height": 75
    },
    "14": {
      "x": 75,
      "y": 225,
      "width": 75,
      "height": 75
    },
    "15": {
      "x": 150,
      "y": 225,
      "width": 75,
      "height": 75
    },
    "16": {
      "x": 225,
      "y": 225,
      "width": 75,
      "height": 75
    },
  });
}