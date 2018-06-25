//space station location

var lineX=0;
var url='http://api.open-notify.org/iss-now.json';

var issX=0;
var issY=0;


function setup() {
  createCanvas(600, 400);
  //ask API every seconds
  setInterval(askISS, 1000);
  
}

function askISS(){
  loadJSON(url, gotData);
}

function gotData(data){
  
  var lat=data.iss_position.latitude;
  var long=data.iss_position.longitude;
  //using map function to translate data into 2D Canva
  issX=map(lat, -90, 90,0, width );
  issY=map(long, -180, 180,0, height);
  
  console.log(lat);
  console.log(long);
}

function draw() {
  background(51);
  
  //ISS drawing
  fill(255);
  ellipse(issX, issY, 24, 24);
  
  stroke(255);
  line(lineX, 0, lineX, height);
  lineX=lineX+5;
  if (lineX>width){
    lineX =0;
  }
  
}