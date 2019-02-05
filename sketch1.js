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

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#00003a');

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

function draw()
{

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
