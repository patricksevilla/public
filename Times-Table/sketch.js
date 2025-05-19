let coor;
let num = 200
let index = 0
let labelX = []
let labelY = []
let mult = 2


function setup() {
  createCanvas(windowWidth, windowHeight)
  noFill()

  angleMode(DEGREES)


}


function draw() {
    

  background(255,100,100)
    circle(windowWidth / 2, windowHeight / 2, windowHeight)
  translate(windowWidth / 2, windowHeight / 2)



  for (let i = 180; i <= 360 + 180; i = i + 360 / num) {

    coor = polarToCartesian(windowHeight / 2, i)
    ellipse(coor.x, coor.y, 10)
    labelX[index] = coor.x
    labelY[index] = coor.y
    index++
  }

  for (let f = 0; f < num; f++) {
    line(labelX[f], labelY[f], labelX[(f * mult) % num], labelY[(f * mult) % num])
    
    
  }

  num++

}




function polarToCartesian(radius, theta) {
  let y = sin(theta) * radius
  let x = cos(theta) * radius

  return createVector(x, y)
}