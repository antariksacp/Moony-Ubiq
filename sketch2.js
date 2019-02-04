/*
 * Ubiquitous Computing - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 *
 * Uses a PubNub function to query the Wolfram Conversation API
 *
 *
 */

// server variables

var dataServer;
var pubKey = 'pub-c-b3976579-15b7-4f52-8548-26f9c70088dc';
var subKey = 'sub-c-fee5c592-e6a6-11e8-a9bc-3e610c0bb465';

//input variables
var sendText;
var sendButton;

//size of the active area
var cSizeX = 1200;
var cSizeY = 600;

var returnedAnswer = [];

//This must match the channel you set up in your function
var channelName = "wolfram";

function setup()
{
  getAudioContext().resume();
  createCanvas(cSizeX, cSizeY);
  background(255);



   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });

  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming})
  dataServer.subscribe({channels: [channelName]});

  //create the text fields for the message to be sent !!! IMPT
  sendText = createInput();
  sendText.position(5,height);

  sendButton = createButton('Ask a Question');
  sendButton.position(sendText.x + sendText.width,height);
  sendButton.mousePressed(sendTheMessage);

}

function draw()
{


}


///uses built in mouseClicked function to send the data to the pubnub server
function sendTheMessage() {


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

function readIncoming(inMessage) //when new data comes in it triggers this function,
{                               // this works becsuse we subscribed to the channel in setup()


console.log(inMessage);  //log the entire response
                          //the message parameter to look for is answer


    background(255);
    noStroke();
    fill(0);  //read the color values from the message
    textSize(20);
    text(inMessage.message.answer, 5,5, height/2, 800);
    returnedAnswer=inMessage.message.answer.split(" ");

}

function whoisconnected(connectionInfo)
{

}
