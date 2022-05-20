function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(3, 19, 252)
  text(mouseX+","+mouseY, mouseX, mouseY)
}
