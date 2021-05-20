let penSize = 1;
let penState = 0;

let Archivo;
function preload() {
  Archivo = loadFont(
    "https://cdn.glitch.com/b0f38a5f-fd5b-4a93-a669-dd9ce2328985%2FArchivo-Regular.ttf?v=1615548913164"
  );
}

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.parent("tool");
  background(255);
  textFont(Archivo);
  title = text("Instructions:", 30, 110);
  title = text("1. Click and hold to draw your tattoo.", 30, 130);
  title = text("2. Upload your drawing.", 30, 150);
  title = text("3. Watch it appear on the performer's face!", 30, 170);
  title = text("4. Press c to clear the canvas", 30, 190);
}

function draw() {
  if (mouseIsPressed) {
    if (penState == 0) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

    if (penState == 1) {
      ellipse(mouseX, mouseY, 10, 10);
    }

    if (penState == 2) {
      line(mouseX - 5, mouseY - 5, mouseX + 5, mouseY + 5);
      line(mouseX + 5, mouseY - 5, mouseX - 5, mouseY + 5);
    }
  }
}

function keyTyped() {
  if (key == "c") {
    background(255);
  }

  if (key == "r") {
    stroke(255, 0, 0);
  }

  if (key == "b") {
    stroke(0, 0, 255);
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && penSize > 1) {
    penSize -= 1;
  }

  if (keyCode == RIGHT_ARROW) {
    penSize += 1;
  }

  strokeWeight(penSize);
}

function saveImage() {
  save("tattoo" + ".jpg");
}
