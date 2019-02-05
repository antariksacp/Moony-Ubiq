/*
 * Moon Phases 101 by Carisa Antariksa
 *
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * PubNub to query the Wolfram Conversation API 
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

//channel 
var channelName = "Wolfram";

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

    // initialize pubnub
  	dataServer = new PubNub(
  	{
    publish_key   : pubKey,  //your keys online
    subscribe_key : subKey,
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  	});

  //attach callbacks to the pubnub object to handle messages and connections
 	dataServer.addListener({ message: readIncoming})
  	dataServer.subscribe({channels: [channelName]});

  	fill(255);
  	textSize(20);
  	textStyle(BOLD);
  	text("Moon Phases 101", 730, 500);
}
    //noStroke();
    //fill(255);  //read the color values from the message
    //textSize(20);
    //text("Click to get "+howManyToAsk+" quantum random Numbers", 5, height/2);

function draw(){
    image(nmoon, 1170, 398, nmoon.width / 2, nmoon.height /2);
    image(wncrescent, 1000, 606, wncrescent.width / 2, wncrescent.height /2);
    image(lastq, 719, 680, lastq.width / 2, lastq.height / 2);
    image(wngibbous, 450, 604, wngibbous.width / 2, wngibbous.height / 2);
    image(fmoon, 289, 398, fmoon.width / 2, fmoon.height /2);
    image(wxgibbous, 450, 188, wxgibbous.width / 2, wxgibbous.height / 2);
    image(firstq, 718, 116, firstq.width / 2, firstq.height / 2);
    image(wxcrescent, 1000, 193, wxcrescent.width / 2, wxcrescent.height / 2);

    // moonRange();
}

// function moonRange(mimg,mpx,mpy,fact){
// 	var mCycle = new Moony(mimg,mpx,mpy,fact);
	// mCycle.translate(windowWidth,windowHeight);
	// mCycle.push(mCycle); 
// }

// function Moony(mimg,mpx,mpy,fact) {
// 	this.image = mimg;
// 	this.mousex = mpx;
// 	this.mousey = mpy;
// 	this.fact = fact;
// 	this.x;
// 	this.y;

// 	this.moonClick = function
// }

function mouseClicked(){
    // for(var i = 0; i < moonPhase.length; i++){
    // 	moonPhase[i].moonClick(mouseX,mouseY);
    // }
}

function sendTheMessage(){
   // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: channelName,
      message:
      {
        text: sendText.value()       //text: is the message parameter the function is expecting
      }
    });

}

function readIncoming(inMessage) {

	console.log(inMessage);

	textSize(14);
	//text(inMessage.message.answer, 5, 5, height/2, 800);
	text(inMessage.message.answer, 5, height/2);
	returnedAnswer=inMessage.message.answer.split(" ");
}

function whoisconnected(connectionInfo)
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
