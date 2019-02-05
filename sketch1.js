/*
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * Uses the quantum random number generator at http://qrng.anu.edu.au/API/api-demo.php
 * to pull a set of quantum randoms
 *
 */

// var bitsToAsk = 8;  //can be 8 or 16
// var howManyToAsk = 6;

// server variables
var dataServer;
var pubKey = 'pub-c-b3976579-15b7-4f52-8548-26f9c70088dc';
var subKey = 'sub-c-fee5c592-e6a6-11e8-a9bc-3e610c0bb465';

//moon phases array
var moonPhase = []
var nmoon, wncrescent, lastq, wngibbous, fmoon, wxgibbous, firstq, wxcrescent;

function preload() {
  nmoon = loadImage("moon1.png");
  wncrescent = loadImage("moon8.png");
  lastq = loadImage("moon7.png");
  wngibbous = loadImage("moon6.png");
  fmoon = loadImage("moon5.png");
  wxgibbous = loadImage("moon4.png");
  firstq = loadImage("moon3.png");
  wxcrescent = loadImage("moon2.png");

  moonPhase.push(nmoon);
  moonPhase.push(wncrescent);
  moonPhase.push(lastq);
  moonPhase.push(wngibbous);
  moonPhase.push(fmoon);
  moonPhase.push(wxgibbous);
  moonPhase.push(firstq);
  moonPhase.push(wxcrescent);

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#000021');

    for (var i = 0; i < 200; i++) {
      var x = random(width);
      var y = random(height);
      var r = 0.5;
      fill('#ffffff');
      noStroke();
      ellipse(x, y, r*2, r*2);
    }
}
    //noStroke();
    //fill(255);  //read the color values from the message
    //textSize(20);
    //text("Click to get "+howManyToAsk+" quantum random Numbers", 5, height/2);

function draw(){
    image(nmoon, 1119, 398);
    image(wncrescent, 1030, 606);
}

function mouseClicked(){
 var
}

// function mousePressed()
// {
// var askurl = "https://qrng.anu.edu.au/API/jsonI.php?length="+howManyToAsk+"&type=uint"+bitsToAsk;
//
// loadJSON(askurl,whatHappened);   //more details on this function here: https://p5js.org/reference/#/p5/loadJSON
//
// }
//
//
// function whatHappened(returnData)
// {
// console.log(returnData);  //look in the console to see the structure of the returned message
//
//
// background(0,200,255);		//change the background to light blue
//
// 	//this loop goes through the array of values returned and draws a circle for each
// 	//the amount of circles is determined by how many randoms you ask the API to return
// 	for(var i=0;i<returnData.data.length;i++)
// 	{
// 		noFill();
// 		stroke(255);
// 		ellipse(width/2,height/2,returnData.data[i],returnData.data[i]);
//
// 	}
//
