//FT TO D
let concNum = 0


let wave = [];

let angleBN = 0
let angleAN = 0
let angleANcos = 0
let angleBNsine = 0

//COLOR ELEMENT VARIABLES
let bgColor = 255
let waveColorG = 0
let circleColor = 0
let vectColor = 0
let lineProjColorR = 0
let cartesianColor = 0


//VARIABLES
let VARIABLEA0 = 0;
let n = 0

//D INITIALIZATION
let pOfTan = 0
let changeDir = 1
let fxColorGDeriva = 0
let tanLineColorRDeriva = 0

move = 0

let enableGraph = 1
let epicyclePosX = 3 / 4
let seeTools = 0


let BNtextbox = 0;
let BNsubmissionStatus = 0

let ANtextbox = 0;
let ANsubmissionStatus = 0

let A0textbox = 0;
let A0submissionStatus = 0

let Ltextbox = 0
let LsubmissionStatus= 0


let dfxtextbox = 0
let dfxsubmissionStatus = 0

let dfxPrimetextbox = 0
let dfxPrimesubmissionStatus = 0

let adjustHeightFullScreen = 0

function setup() {
  createCanvas(windowWidth, windowHeight + adjustHeightFullScreen)
  concButs();
  mgaSlider();
  modeButton()
  tagaDisableButtons();
  epicyclePositionButs();
  inputs();

}


function draw() {
// translate(width/2,height/2)
// rotate(PI/2)
// translate(-width/2,-height/2)
  


  if (concNum == 0) {
    background(bgColor)
    cartesian();
    // sineEpicycle();
    epicycle();


    textSize(20)
    stroke(cartesianColor)
    hey = text('FOURIER SERIES', 0, height - 130)





  } else if (concNum == 1) {
    background(bgColor);
    heyhey = text('DERIVATIVES',0,height-220)
    cartesianD();
    push()
    yD();
    tangentLineD()
    lineSlopeProj();
    pop()
    slopeValPrint();

 
  }

}

function concButs() {

  let concButsW = 150
  let concButH = 20
  fsBut = createButton('Fourier Series')
  fsBut.position(0, 0)
  fsBut.size(concButsW, concButH)
  fsBut.mousePressed(fsExe)


  dBut = createButton('Derivatives')
  dBut.position(0, 20)
  dBut.size(concButsW, concButH)
  dBut.mousePressed(dExe)

}


function fsExe() {
  concNum = 0
}


function dExe() {
  concNum = 1
}

function sincosExe() {
  concNum = 2
}

function inputs(){
  let textBoxWidth = 200
  let submitButPosX = textBoxWidth + 5
  let submitButWidth = 60
  let submitResetButPosX = submitButWidth + textBoxWidth

  BNtextBox = (createInput('Bn'))
  BNtextBox.size(200, 20)
  BNtextBox.position(0, height - 30)

  BNsubmitBut = createButton('Submit')
  BNsubmitBut.position(submitButPosX, height - 30)
  BNsubmitBut.size(submitButWidth, 20)
  BNsubmitBut.mousePressed(submitBN)

  BNsubmitResetBut = createButton('Reset')
  BNsubmitResetBut.position(submitResetButPosX, height - 30)
  BNsubmitResetBut.size(submitButWidth, 20)
  BNsubmitResetBut.mousePressed(submitResetBN)

  ANtextBox = (createInput('An'))
  ANtextBox.size(200, 20)
  ANtextBox.position(0, height - 60)

  ANsubmitBut = createButton('Submit')
  ANsubmitBut.position(submitButPosX, height - 60)
  ANsubmitBut.size(submitButWidth, 20)
  ANsubmitBut.mousePressed(submitAN)

  ANsubmitResetBut = createButton('Reset')
  ANsubmitResetBut.position(submitResetButPosX, height - 60)
  ANsubmitResetBut.size(submitButWidth, 20)
  ANsubmitResetBut.mousePressed(submitResetAN)

  A0textBox = (createInput('A0'))
  A0textBox.size(200, 20)
  A0textBox.position(0, height - 90)

  A0submitBut = createButton('Submit')
  A0submitBut.position(submitButPosX, height - 90)
  A0submitBut.size(submitButWidth, 20)
  A0submitBut.mousePressed(submitA0)

  A0submitResetBut = createButton('Reset')
  A0submitResetBut.position(submitResetButPosX, height - 90)
  A0submitResetBut.size(submitButWidth, 20)
  A0submitResetBut.mousePressed(submitResetA0)
  
  LtextBox = (createInput('L'))
  LtextBox.size(200, 20)
  LtextBox.position(0, height - 120)

  LsubmitBut = createButton('Submit')
  LsubmitBut.position(submitButPosX, height - 120)
  LsubmitBut.size(submitButWidth, 20)
  LsubmitBut.mousePressed(submitL)

  LsubmitResetBut = createButton('Reset')
  LsubmitResetBut.position(submitResetButPosX, height - 120)
  LsubmitResetBut.size(submitButWidth, 20)
  LsubmitResetBut.mousePressed(submitResetL)

  dfxtextBox = (createInput('function'))
  dfxtextBox.size(200, 20)
  dfxtextBox.position(0, height - 180)

  dfxsubmitBut = createButton('Submit')
  dfxsubmitBut.position(submitButPosX, height - 180)
  dfxsubmitBut.size(submitButWidth, 20)
  dfxsubmitBut.mousePressed(submitdfx)

  dfxsubmitResetBut = createButton('Reset')
  dfxsubmitResetBut.position(submitResetButPosX, height - 180)
  dfxsubmitResetBut.size(submitButWidth, 20)
  dfxsubmitResetBut.mousePressed(submitResetdfx)

  dfxPrimetextBox = (createInput('derivatives'))
  dfxPrimetextBox.size(200, 20)
  dfxPrimetextBox.position(0, height - 210)

  dfxPrimesubmitBut = createButton('Submit')
  dfxPrimesubmitBut.position(submitButPosX, height - 210)
  dfxPrimesubmitBut.size(submitButWidth, 20)
  dfxPrimesubmitBut.mousePressed(submitdfxPrime)

  dfxPrimesubmitResetBut = createButton('Reset')
  dfxPrimesubmitResetBut.position(submitResetButPosX, height - 210)
  dfxPrimesubmitResetBut.size(submitButWidth, 20)
  dfxPrimesubmitResetBut.mousePressed(submitResetdfxPrime)
}



















function mousePressed() {
  if (mouseX > width * 3 / 4 && mouseY < height * 1 / 4) {
    let fs = fullscreen();
    fullscreen(!fs);
    adjustHeightFullScreen = 1000
  }

}


function sineEpicycle() {
  push();
  strokeWeight(2)
  let L = PI
  translate(width * 1 / 4, height * 3 / 4 - (VARIABLEA0 * pixelPerUnit.value()));

  scale(0.5)

  let x = 0;
  let y = 0;

  //FOR SINE WAVES
  angleBNsine += 0.05;
  for (let n = 1; n < numVect.value(); n++) {
    //SINE INITIALIZATION OF RELEVANT VARS
    let oldx = x;
    let oldy = y;
    let VARIABLEBN = (2 - cos(-n * PI) - cos(-n * PI)) / (n * PI)
    //SINE COMPUTATION
    radius = pixelPerUnit.value() * (VARIABLEBN);
    theta = (n * PI * -angleAN) / L
    x = (radius * cos(theta)) + x;
    y = (radius * sin(theta)) + y;

    //SINE ACTUTAL CIRCLES
    stroke(circleColor, 0, 0);
    noFill();
    circle(oldx, oldy, radius * 2);


    //SINE VECTORS
    stroke(0, 0, vectColor);
    line(oldx, oldy, x, y);
  }

  translate(200, 0)

  x = 0
  y = 0
  //COSINE FOURIER SERIES
  angleANcos += rateAnglecos;
  for (let n = 1; n < numVect.value(); n++) {

    // COSINE INITIALIZATIONOF RELEVANT VARS
    let oldx = x;
    let oldy = y;
    let VARIABLEAN = 1 / n


    //COSINE COMPUTATION
    radius = pixelPerUnit.value() * (VARIABLEAN);
    theta = (n * PI * -angleAN) / L
    x = (radius * cos(((theta) - (PI / 2)))) + x;
    y = (radius * sin(((theta) - (PI / 2)))) + y;

    //COSINE ACTUAL CIRCLES
    stroke(circleColor, 0, 0);
    noFill();
    circle(oldx, oldy, radius * 2);


    //COSINE VECTORS
    stroke(0, 0, vectColor);
    line(oldx, oldy, x, y);
  }
  pop();
}



function submitBN() {
  BNsubmissionStatus = 1
}

function submitResetBN() {
  BNsubmissionStatus = 0
}

function submitAN() {
  ANsubmissionStatus = 1
}

function submitResetAN() {
  ANsubmissionStatus = 0
}

function submitA0() {
  A0submissionStatus = 1
}

function submitResetA0() {
  A0submissionStatus = 0
}



function submitResetL() {
  LsubmissionStatus = 0
}

function submitL() {
  LsubmissionStatus = 1
}

function submitResetL() {
  LsubmissionStatus = 0
}




//DFX
function submitdfx() {
  dfxsubmissionStatus = 1
}

function submitResetdfx() {
  dfxsubmissionStatus = 0
}

function submitdfxPrime() {
  dfxPrimesubmissionStatus = 1
}

function submitResetdfxPrime() {
  dfxPrimesubmissionStatus = 0
}



function epicycle() {
  push();
  
let L = 0




  

  if (A0submissionStatus == 1) {
    VARIABLEA0 = eval(A0textBox.value())
  } else if (A0submissionStatus == 0) {
    VARIABLEA0 = 0
  }

  translate(width * epicyclePosX, height / 2 - (VARIABLEA0 * pixelPerUnit.value()));

  let x = 0;
  let y = 0;

  //FOR SINE WAVES----------------------------------------
  rateAngle = anglePerLoop.value() / 1000
  let angleBN = rateAngle
  // let rateAngle = 0.05
  angleBN += rateAngle


  for (let n = 1; n < numVect.value(); n++) {
    //SINE INITIALIZATION OF RELEVANT VARS
    let oldx = x;
    let oldy = y;
    
     if (LsubmissionStatus == 1) {
    L = eval(LtextBox.value())
  } else if (LsubmissionStatus == 0) {
    L = 0}

    let VARIABLEBN = 0
    if (BNsubmissionStatus == 1) {
      VARIABLEBN = eval(BNtextBox.value())
    } else if (BNsubmissionStatus == 0) {
      VARIABLEBN = 0
    }


    // let VARIABLEBN = (2 - cos(-n * PI) - cos(-n * PI)) / (n * PI)


    //SINE COMPUTATION-------------------------------------
    radius = pixelPerUnit.value() * (VARIABLEBN);
    theta = (n * PI * -angleAN) / L
    x = (radius * cos(theta)) + x;
    y = (radius * sin(theta)) + y;

    //SINE ACTUTAL CIRCLES
    stroke(circleColor)
    noFill();
    circle(oldx, oldy, radius * 2);


    //SINE VECTORS
    stroke( vectColor);
    line(oldx, oldy, x, y);
  }

  //COSINE FOURIER SERIES--------------------------------
  angleAN += rateAngle
  for (let n = 1; n < numVect.value(); n++) {

    // COSINE INITIALIZATIONOF RELEVANT VARS--------------
    let oldx = x;
    let oldy = y;
    
    if (LsubmissionStatus == 1) {
    L = eval(LtextBox.value())
  } else if (LsubmissionStatus == 0) {
    L = 0}

    let VARIABLEAN = 0
    if (ANsubmissionStatus == 1) {
      VARIABLEAN = eval(ANtextBox.value())
    } else if (ANsubmissionStatus == 0) {
      VARIABLEAN = 0
    }


    //COSINE COMPUTATION--------------------------------
    radius = pixelPerUnit.value() * (VARIABLEAN);
    theta = (n * PI * -angleAN) / L
    x = (radius * cos(((theta) - (PI / 2)))) + x;
    y = (radius * sin(((theta) - (PI / 2)))) + y;

    //COSINE ACTUAL CIRCLES
    stroke(circleColor)
    noFill();
    circle(oldx, oldy, radius * 2);


    //COSINE VECTORS
    stroke( vectColor);
    line(oldx, oldy, x, y);
  }



  //WAVE and LINE PROJECTOR----------------------------
  if (enableGraph == 1) {
    wave.unshift(y)
    strokeWeight(1)
    stroke(lineProjColorR)
    line(x, y, 0, wave[0]);
    stroke(0, waveColorG, 0)
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
      //vertex(i times rate of fastness,wave[]-----------------
      vertex(-i * pixelPerUnit.value() * rateAngle * 1, wave[i]);
    }
    endShape();
    if (wave.width > 300) {
      wave.pop();
    }
  }
  pop();




  //MOVING CARTESIAN AND MOVING LABEL
  push();
  move--
  for (let i = width * 3 / 4; i < width * 7; i += pixelPerUnit.value()) {
    stroke(cartesianColor, 50)
    
    line(i + (move * rateAngle * pixelPerUnit.value()), 0, i + (move * rateAngle * pixelPerUnit.value()), height)



    textStyle(ITALIC)
    textAlign(CENTER)
    textSize(10)
    stroke(255)
    text((i - width * 3 / 4) / pixelPerUnit.value(), i + (move * rateAngle * pixelPerUnit.value()), height / 2 + 3)
    text((i - width * 3 / 4) / pixelPerUnit.value(), width / 2, (height / 2) - ((i - width * 3 / 4)))
    text(-(i - width * 3 / 4) / pixelPerUnit.value(), width / 2, (height / 2) + ((i - width * 3 / 4)))
  }

  pop();
}



//SLIDERS
function mgaSlider() {
  numVect = createSlider(1, 150, 2);
  numVect.position(0, 120, 10)
  pixelPerUnit = createSlider(10, 90, 50)
  pixelPerUnit.position(10, 140)
  anglePerLoop = createSlider(1, 40, 10)
  anglePerLoop.position(10, 160)

}




function cartesian() {
  push();
  //TWO LINES
  stroke(cartesianColor)
  strokeWeight(2)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)


  //GRID
  stroke(cartesianColor, 50)
  strokeWeight(1)
  for (let i = height / 2; i < height; i += pixelPerUnit.value()) {
    line(0, i, width, i)
  }
  for (let i = height / 2; i > 0; i -= pixelPerUnit.value()) {
    line(0, i, width, i)
  }

  pop();

}




function modeButton() {
  dark = createButton('darkmode')
  dark.position(500, 0)
  dark.mousePressed(darkModeExec);

  light = createButton('lightmode')
  light.position(580, 0)
  light.mousePressed(lightModeExec);
}

function darkModeExec() {
  bgColor = 0
  waveColor = 255
  circleColor = 255
  lineProjColorR = 255
  vectColor = 255
  waveColorG = 255
  cartesianColor = 255
  fxColorGDeriva = 255
  tanLineColorRDeriva = 255
}



function lightModeExec() {
  bgColor = 255
  waveColor = 0
  circleColor = 0
  lineProjColorR = 0
  vectColor = 0
  waveColorG = 0
  cartesianColor = 0
  fxColorGDeriva = 0
  tanLineColorRDeriva = 0
}






//DISABLER BUTTONS---------------------------------------
function tagaDisableButtons() {
  disableGraphBut = createButton('Disable Graph')
  disableGraphBut.position(0, height-350)
  disableGraphBut.size(110, 20)
  disableGraphBut.mousePressed(disableGraphExe)


  enableGraphBut = createButton('Enable Graph')
  enableGraphBut.position(0, height-330)
  enableGraphBut.size(110, 20)
  enableGraphBut.mousePressed(enableGraphButExe)
}


function disableGraphExe() {
  enableGraph = 0
}

function enableGraphButExe() {
  enableGraph = 1
}
//---------------------------------------------------



// BUTTONS TO CHANGE EPICYCLE POSITION-------------------
function epicyclePositionButs() {
  centerPosition = createButton('Center Position')
  centerPosition.position(0, height-310)
  centerPosition.size(110, 20)
  centerPosition.mousePressed(centerPositionExe)

  threeforthPosition = createButton('Default')
  threeforthPosition.position(0, height-290)
  threeforthPosition.size(110, 20)
  threeforthPosition.mousePressed(threeforthPostionExe)

  widthPosition = createButton('Width Postion')
  widthPosition.position(0, height-270)
  widthPosition.size(110, 20)
  widthPosition.mousePressed(widthPositionExe)
}

function centerPositionExe() {
  epicyclePosX = 1 / 2
}

function threeforthPostionExe() {
  epicyclePosX = 3 / 4
}

function widthPositionExe() {
  epicyclePosX = 1
}
//--------------------------------------------------------
































function cartesianD() {
  //X AND Y AXIS
  stroke(cartesianColor)
  strokeWeight(3)
  line(width / 2, 0, width / 2, height)
  line(0, height / 2, width, height / 2)



  stroke(cartesianColor, 90)
  strokeWeight(1)
  translate(width / 2, height / 2)
  //HORIZONTAL DOWN
  for (let i = 0; i < height / 2; i += pixelPerUnit.value()) {
    line(-width / 2, i, width / 2, i)
  }

  //HORIZONTAL UPPER
  for (let i = 0; i > -height / 2; i -= pixelPerUnit.value()) {
    line(-width / 2, i, width / 2, i)
  }

  //RIGHT VERTICAL
  for (let i = 0; i < width / 2; i += pixelPerUnit.value()) {
    line(i, -height / 2, i, height / 2)
  }

  //LEFT VERTICAL
  for (let i = 0; i > -width / 2; i -= pixelPerUnit.value()) {
    line(i, -height / 2, i, height / 2)
  }

}

function yD() {

  //THE FX GRAPH
  if (enableGraph == 1) {
    beginShape()
    stroke(0, fxColorGDeriva, 0, 255)
    strokeWeight(2)
    noFill()
    for (let a = -width; a < width; a += 0.1) {
      funcD(a);
      vertex(pixelPerUnit.value() * a, pixelPerUnit.value() * -fx)
    }
    endShape()
  }
}






function funcD(x) {
  angleMode(RADIANS)

  if (dfxsubmissionStatus == 1) {
    fx = eval(dfxtextBox.value())
  } else if (dfxsubmissionStatus == 0) {
    fx = 0
  }

}



function deriva(x) {
  angleMode(RADIANS)
    if (dfxPrimesubmissionStatus == 1) {
      fxPrime = eval(dfxPrimetextBox.value())
  } else if (dfxPrimesubmissionStatus == 0) {
    fxPrime = 0
  }

}

function tangentLineD() {

  if (pOfTan * pixelPerUnit.value() > width / 2) {
    changeDir = -1
  } else if (pOfTan * pixelPerUnit.value() < -width / 2) {
    changeDir = 1
  }



  pOfTan = pOfTan + (0.1 * changeDir)



  //calling relevant functions
  funcD(pOfTan)
  deriva(pOfTan);


  stroke(tanLineColorRDeriva, 0, 0)
  strokeWeight(2)


  //point of tangency
  point(pOfTan * pixelPerUnit.value(), -fx * pixelPerUnit.value())

  x1 = pOfTan + 1
  x2 = pOfTan - 1



  push();
  strokeWeight(3)
  translate(pOfTan * pixelPerUnit.value(), -fx * pixelPerUnit.value())

  rotate(-atan(fxPrime))

  translate(-pOfTan * pixelPerUnit.value(), fx * pixelPerUnit.value())

  line(x1 * pixelPerUnit.value(), -fx * pixelPerUnit.value(), x2 * pixelPerUnit.value(), -fx * pixelPerUnit.value())
  pop();
}


function slidersD() {
  pixelPerUnit = createSlider(1, 100, 50)
}

function slidersD() {
  pixelPerUnit = createSlider(1, 100, 50)
}

function lineSlopeProj() {

  strokeWeight(5)
  stroke(0, 0, 150)
  fill(0, 0, 100)
  rect((width / 2) * (4 / 5) - 70, 180, 140, 140, 10)

  let slopeProjPosX = (width / 2) * (4 / 5)
  let slopeProjPosY = 250

  translate(slopeProjPosX, slopeProjPosY)
  rotate(-atan(fxPrime))
  translate(-slopeProjPosX, -slopeProjPosY)
  stroke(255, 0, 0)
  line((slopeProjPosX - 50), slopeProjPosY, (slopeProjPosX + 50), slopeProjPosY)



}


function slopeValPrint() {
  funcD(pOfTan)
  deriva(pOfTan);
  text(fxPrime, (width / 2) * (4 / 5) - 70, 170)
}