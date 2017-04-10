var numbers = [15,22,48,37];

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
     //row of circles
    fill(random(0,50), random(0,100), random(0,255));
    rowOfCircle();
    //row of squares
    fill(random(0,255),random(0,255),random(0,255));
    rowOfSquares();
    //draws circles
    fill(random(0,255), random(0,100), random(0,100))
    if(mouseIsPressed){
        paint();
    }
   
}

function paint(){
    noStroke();
    ellipse(mouseX,mouseY,100,100);
}

function rowOfSquares(){
    for(var i = 0; i < 4; i++){
         rect((i+1)*100,200,numbers[i],numbers[i]);
    }
}

function rowOfCircle(){
    for(var i = 0; i < 4; i++){
         ellipse((i+1)*100,300,numbers[i],numbers[i]);
    }
}