let wave = [];


let rateAngle = 0.05
let angleBN = -rateAngle;
let angleAN = -rateAngle;


//COLOR ELEMENT VARIABLES
let bgColor = 255
let waveColorG = 0
let circleColor = 0
let vectColor = 0
let lineProjColorR = 0
let cartesianColor = 0


//CANVAS DIMENSION
let diw = 1200
let tyah = 600

//VARIABLES
  let VARIABLEA0=0;
  let n = 0

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  mgaSlider();
  darkModeButton();
  lightmodeButton();
  buttons();

}

//for looping
function draw() {

  background(bgColor);
  cartesian();
  
  
  push();
  epicycle();
  pop();
  

  

  
  
}
















function epicycle() {
  let L = PI
 
  translate(width * 3/4, height/2 - (VARIABLEA0 * pixelPerUnit.value()));

  let x = 0;
  let y = 0;

//FOR SINE WAVES
  angleBN += rateAngle;


  for (let i = 0; i < numVect.value(); i++) {
    //SINE INITIALIZATION OF RELEVANT VARS
    let oldx = x;
    let oldy = y;
    n = i + 1;
    let VARIABLEBN = (2/(n*n*PI*PI))*((PI*sin(n*PI))-(n*PI*PI*cos(n*PI)))


    //SINE COMPUTATION
    radius = pixelPerUnit.value() * (VARIABLEBN);
    x = (radius * cos((n * PI * -angleBN) / L)) + x;
    y = (radius * sin((n * PI * -angleBN) / L)) + y;

    //SINE ACTUTAL CIRCLES
    stroke(circleColor, 0, 0);
    noFill();
    circle(oldx, oldy, radius * 2);


    //SINE VECTORS
    stroke(0, 0, vectColor);
    line(oldx, oldy, x, y);
    
    
    push()
    scale(0.5)
    translate(0, (height*2/4) - (VARIABLEA0 * pixelPerUnit.value()));
    stroke(circleColor, 0, 0);
    strokeWeight(2)
    noFill();
    circle(oldx, oldy, radius * 2);
    stroke(0, 0, vectColor);
    line(oldx, oldy, x, y);
    pop()
    
  }
  
  
  push();
  scale(0.5)
  wave.unshift(y);
  strokeWeight(1)
  stroke(lineProjColorR, 0, 0)
  line(x, y, 0, wave[0]);
  stroke(0, waveColorG, 0)
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    //vertex(i times rate of fastness,wave[]
    vertex(i * pixelPerUnit.value() * rateAngle * -1, wave[i]);
  }
  endShape();
  pop();
  


//COSINE FOURIER SERIES
  angleAN += rateAngle;
  for (let i = 0; i < numVect.value(); i++) {

    // COSINE INITIALIZATIONOF RELEVANT VARS
    let oldx = x;
    let oldy = y;
    n = i + 1;
    let VARIABLEAN = ((4 * (pow(-1, n))) / (n * n))


    //COSINE COMPUTATION
    radius = pixelPerUnit.value() * (VARIABLEAN);
    x = (radius * cos(((n * PI * -angleAN) / L) - (PI / 2))) + x;
    y = (radius * sin(((n * PI * -angleAN) / L) - (PI / 2))) + y;


    //COSINE ACTUAL CIRCLES
    stroke(circleColor, 0, 0);
    noFill();
    circle(oldx, oldy, radius * 2);


    //COSINE VECTORS
    stroke(0, 0, vectColor);
    line(oldx, oldy, x, y);

 
    
    
    
    
    
    
  }



//WAVE and LINE PROJECTOR
  wave.unshift(y);
  strokeWeight(1)
  stroke(lineProjColorR, 0, 0)
  line(x, y, 0, wave[0]);

  stroke(0, waveColorG, 0)
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    //vertex(i times rate of fastness,wave[]
    vertex(i * pixelPerUnit.value() * rateAngle * -1, wave[i]);
  }
  endShape();
  
  
  



  if (wave.width > 300) {
    wave.pop();
  }

}



//SLIDERS
function mgaSlider() {
  numVect = createSlider(1, 150, 2);
  numVect.position(10,10,10)
  pixelPerUnit = createSlider(10,90,50)
  pixelPerUnit.position (20,20)
}


function cartesian() {

  //TWO LINES
  stroke(cartesianColor)
  strokeWeight(8)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)


   //GRID
  stroke(cartesianColor,50)
  strokeWeight(1)
  for (let i = height/2; i < height; i += pixelPerUnit.value()) {
    line(0, i, width, i)
  }
  for (let i = height/2; i > 0; i -= pixelPerUnit.value()) {
    line(0, i, width, i)
  }
  for (let i = width/2; i < width; i += pixelPerUnit.value()) {
    line(i, 0, i, height)
  }
  for (let i = width/2; i > 0; i -= pixelPerUnit.value()) {
    line(i, 0, i, height)
  }
}






function darkModeButton() {
  dark = createButton('darkmode')
  dark.position(500, 0)
  dark.mousePressed(darkModeExec);
}

function darkModeExec() {
  bgColor = 0
  waveColor = 255
  circleColor = 255
  lineProjColorR = 255
  vectColor = 255
  waveColorG = 255
  cartesianColor = 255
}

function lightmodeButton() {
  light = createButton('lightmode')
  light.position(580, 0)
  light.mousePressed(lightModeExec);
}

function lightModeExec() {
  bgColor = 255
  waveColor = 0
  circleColor = 0
  lineProjColorR = 0
  vectColor = 0
  waveColorG = 0
  cartesianColor = 0
}

function buttons() {
  let kinalalagyany = 470
  let kinalalagyanx = 0


  zero = createButton('0')
  zero.position(kinalalagyanx, kinalalagyany)
  pi = createButton('pi')
  pi.position(kinalalagyanx + 30, kinalalagyany)
  e = createButton('e')
  e.position(kinalalagyanx + 60, kinalalagyany)
  over = createButton('/')
  over.position(kinalalagyanx + 90, kinalalagyany)
  isa = createButton('1')
  isa.position(kinalalagyanx, kinalalagyany + 30)
  dalawa = createButton('2')
  dalawa.position(kinalalagyanx + 30, kinalalagyany + 30)
  tatlo = createButton('3')
  tatlo.position(kinalalagyanx + 60, kinalalagyany + 30)
  times = createButton('*')
  times.position(kinalalagyanx + 90, kinalalagyany + 30)
  apat = createButton('4')
  apat.position(kinalalagyanx, kinalalagyany + 60)
  lima = createButton('5')
  lima.position(kinalalagyanx + 30, kinalalagyany + 60)
  anim = createButton('6')
  anim.position(kinalalagyanx + 60, kinalalagyany + 60)
  minus = createButton('-')
  minus.position(kinalalagyanx + 90, kinalalagyany + 60)
  pito = createButton('7')
  pito.position(kinalalagyanx, kinalalagyany + 90)
  walo = createButton('8')
  walo.position(kinalalagyanx + 30, kinalalagyany + 90)
  siyam = createButton('9')
  siyam.position(kinalalagyanx + 60, kinalalagyany + 90)
  add = createButton('+')
  add.position(kinalalagyanx + 90, kinalalagyany + 90)


  isa.mousePressed(isaas)
  dalawa.mousePressed(dalawaas)
  tatlo.mousePressed(tatloas)
  pi.mousePressed(pias)
}


function isaas(){
   VARIABLEA0 = (VARIABLEA0*10)+1
 }

function dalawaas(){
    VARIABLEA0 = (VARIABLEA0*10)+2
  }

function tatloas(){
     VARIABLEA0 = (VARIABLEA0*10)+3
   }

function pias(){
  if(VARIABLEA0==0){
    VARIABLEA0 = PI
  }else{
   VARIABLEA0 = (VARIABLEA0*PI)
 }
}




function sineEpicycle(){
 let L = PI
  translate(width * 3/4, (height*3/4) - (VARIABLEA0 * pixelPerUnit.value()));

  let xsine = 0;
  let ysine = 0;

//FOR SINE WAVES
  angleBN += rateAngle;


  
  for (let i = 0; i < numVect.value(); i++) {
    //SINE INITIALIZATION OF RELEVANT VARS
    let oldxsine = xsine;
    let oldysine = ysine;
    n = i + 1;
    let VARIABLEBN = (2/(n*n*PI*PI))*((PI*sin(n*PI))-(n*PI*PI*cos(n*PI)))

    
    
    
    //SINE COMPUTATION
    radius = pixelPerUnit.value() * (VARIABLEBN);
    xsine = (radius * cos((n * PI * -angleBN) / L)) + xsine;
    ysine = (radius * sin((n * PI * -angleBN) / L)) + ysine;

    //SINE ACTUTAL CIRCLES
    stroke(circleColor, 0, 0);
    noFill();
    circle(oldxsine, oldysine, radius * 2);


    //SINE VECTORS
    stroke(0, 0, vectColor);
    line(oldxsine, oldysine, xsine, ysine);
  }
}
