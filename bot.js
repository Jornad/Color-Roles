const config = require("./config.json"); //Load the config file
//const logfile = require("./log.txt");
const Discord = require("discord.js"); //Import discord.js
const colors = require("colors"); //Allows use of colors in console
const clear = require("clear"); //Lets us clear the console
const client = new Discord.Client(); //Create Discord client instance

//Logger
function mlog(status, type, message) {
  let cmsg = []; //Array for console message
  let lmsg = []; //Array for log message
  let d = new Date(); //Creates new date object
  let ctime = [d.getHours(), d.getMinutes(), d.getSeconds()]; //makes an array of hh, mm, ss

  switch (status) {
    case "INFO": //Logs info
      console.log("[".white + ctime.join(":").cyan + " INFO".green + "]: ".white + type.white + " - ".white + message.white);
      break;
    case "WARN": //Logs warnings
      console.log("[".white + ctime.join(":").cyan + " WARN".yellow + "]: " + type.white + " - ".white + message.white);
      break;
    case "ERROR": //logs errors
      console.log("[".white + ctime.join(":").cyan + " ERROR".red + "]: " + type.white + " - ".white + message.white);
      break;
  }
}

//Set role
function setrole(color) {

}

//Create role
function newrole(color) {

}

//Does initial setup when client is ready
client.on("ready", () => {
  clear();
  client.user.setUsername(config.username.toString());
  mlog("INFO", "LOGIN", "Cleared Console");
  mlog("INFO", "LOGIN", "Connected");
  mlog("INFO", "LOGIN", "Logged in as " + client.user.username + " " + client.user.id);

  client.user.setActivity(config.prefix + "help"); //Set bot status to help message
  mlog("INFO", "SETUP", "Set game to " + config.prefix + "help");
  mlog("INFO", "SETUP", "I am ready!");
});

//Main stuff
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Ignore messages missing prefix or sent by another bot

  const commandBody = message.content.slice(config.prefix.length); //Slice the prefix off
  const args = commandBody.split(' '); //Splits command and args into an array
  const command = args.shift().toLowerCase(); //Takes off first element from the args array and uses that as the command

  if (command === "help") {

  } else if (command === "hex") { //Hex
    console.log("hex");
  } else if (command === "rgb") { //Convert rgb
    console.log("rgb");
  } else if (command === "hsl") { //Convert hsl
    console.log("hsl");
  } else if (command === "hwb") { //Convert hwb
    console.log("hwb");
  } else if (command === "cmyk") { //Convert cmyk
    console.log("cmyk");
  } else if (command === "ncol") { //Cpnvert ncol
    console.log("ncol");
  }

  console.log(command + "," + args);
});

client.login(config.token); //Log in bot using token from config
