


function setup() {
  createCanvas(800, 400);
  dr = createSlider(1,20,10)
  dr.position(5,10)
  yStretch = createSlider(1,20,10)
  yStretch.position(5,30)
  Radius = createSlider(100,200,200)
  Radius.position(5,50)
}

function draw() {
  background(0);
  
  stroke(255)
  textSize(15)
  text('dx- decides how small the difference of slice',150,25)
  text('stretch y',150,50)
  text('R',150,75)
  
  
  
  //CIRCLE HOLDER
  stroke(255)
  line(200,200,200,height)
  
  push()
  stroke(255)
  textSize(15)
  translate(220,height-20)
  rotate(PI/-2)
  text('circle cutter',0,0)
  pop()
  
  for(let i = dr.value(); i < Radius.value(); i+= dr.value()){
  stroke(0,255-i,i)
  noFill()
  circle(200,200,i)
  }
  
  translate(width/2,height-50)
  for(let i = dr.value() ; i < Radius.value()+1; i+=dr.value()){
    stroke(255)
    line(0,0,300,0)
    line(0,0,0,-400)
    stroke(0,255-i,i)
    rect(i,-2*PI*i*(yStretch.value())/100,dr.value(),2*PI*i*(yStretch.value())/100)
    
  }
  
  push()
    stroke(255)
  textSize(15)
  text('height of each rectangle is the circumference of every sliced circle',-70,20)
  pop()
  
  push()
  line(300,0,300,-Radius.value()*PI*2*yStretch.value()/100)
  
  translate(320,(-Radius.value()*PI*2*yStretch.value()/100)/2)
  rotate(PI/-2)
  stroke(255)
  text('height=2(pi)R',0,0)
  pop()
  

}