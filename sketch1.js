/*
 * Moon Phases 101 by Carisa Antariksa
 *
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * PubNub to query the Wolfram Conversation API 
 *
 */

// server variables
var dataServer;
var pubKey = 'pub-c-b3976579-15b7-4f52-8548-26f9c70088dc';
var subKey = 'sub-c-fee5c592-e6a6-11e8-a9bc-3e610c0bb465';

// moon phases array
// var moonPhase = []
var nmoon, wncrescent, lastq, wngibbous, fmoon, wxgibbous, firstq, wxcrescent;

// //set var to call class
// var phaseNow;

//input variables
var sendText;

//channel 
var channelName = "wolfram";

function preload() {
  nmoon = loadImage("moon1.png");
  wncrescent = loadImage("moon8.png");
  lastq = loadImage("moon7.png");
  wngibbous = loadImage("moon6.png");
  fmoon = loadImage("moon5.png");
  wxgibbous = loadImage("moon4.png");
  firstq = loadImage("moon3.png");
  wxcrescent = loadImage("moon2.png");

  // moonPhase.push(nmoon);
  // moonPhase.push(wncrescent);
  // moonPhase.push(lastq);
  // moonPhase.push(wngibbous);
  // moonPhase.push(fmoon);
  // moonPhase.push(wxgibbous);
  // moonPhase.push(firstq);
  // moonPhase.push(wxcrescent);

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
  	text("Moon Phases, When?", 700, 400);
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

function touchStarted(){
	if (mouseX >= 1170 && mouseY >= 398) {
		if ( mouseX <= (1170+nmoon.width / 2) && mouseY <= (398+nmoon.height /2)) {
			sendTheMessage("new moon");
			console.log("Yes");
		}
	}

	if (mouseX >= 1000 && mouseY >= 606) {
		if ( mouseX <= (1000+wncrescent.width / 2) && mouseY <= (606+wncrescent.height /2)) {
			
			sendTheMessage("waning crescent");
			console.log("Yes");
		}
	}

	if (mouseX >= 719 && mouseY >= 680) {
		if ( mouseX <= (719+lastq.width / 2) && mouseY <= (680+lastq.height /2)) {
			sendTheMessage("last quarter moon");
			console.log("Yes");
		}
	}

	if (mouseX >= 450 && mouseY >= 604) {
		if ( mouseX <= (450+wngibbous.width / 2) && mouseY <= (604+wngibbous.height /2)) {
			sendTheMessage("waning gibbous");
			console.log("Yes");
		}
	}

	if (mouseX >= 289 && mouseY >= 398) {
		if ( mouseX <= (289+fmoon.width / 2) && mouseY <= (398+fmoon.height /2)) {
			sendTheMessage("full moon");
			console.log("Yes");
		}
	}

	if (mouseX >= 450 && mouseY >= 188) {
		if ( mouseX <= (450+wxgibbous.width / 2) && mouseY <= (188+wxgibbous.height /2)) {
			sendTheMessage("waxing gibbous");
			console.log("Yes");
		}
	}

	if (mouseX >= 718 && mouseY >= 116) {
		if ( mouseX <= (718+firstq.width / 2) && mouseY <= (116+firstq.height /2)) {
			sendTheMessage("first quarter moon");
			console.log("Yes");
		}
	}

	if (mouseX >= 1000 && mouseY >= 193) {
		if ( mouseX <= (1000+wxcrescent.width / 2) && mouseY <= (193+wxcrescent.height /2)) {
			sendTheMessage("waxing crescent");
			console.log("Yes");
		}
	}

    // for(var i = 0; i < moonPhase.length; i++){
    // 	moonPhase[i].moonClick(mouseX,mouseY);
    // }
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

// 	this.moonClick = function(mX,mY){
	 // var d = dist(this.x,this.y,mX,mY);
  //    var maxRadius = 10;
  //    if(d < (maxRadius-1)){
  //              // check if in range
  //        print("within range");
  //              // show phase
  //        fill(180,0,0);
  //        textSize(12);
  //        text(this.name,mX,mY);
  //        phaseNow = this.name;
  //        // phase within range, send message to wolfram
  //        sendTheMessage();
  //         }
// }
// }


function sendTheMessage(message){
   // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: channelName,
      message: 
      {
        text: message  //text: is the message parameter the function is expecting
      }
    });

}

function readIncoming(inMessage) {

	console.log(inMessage);

	textSize(14);
	//text(inMessage.message.answer, 5, 5, height/2, 800);
	console.log(inMessage.message.answer);
	text(inMessage.message.answer, 650, 500, height/3, 300);
	returnedAnswer=inMessage.message.answer.split(" ");

}

function whoisconnected(connectionInfo)
{

}