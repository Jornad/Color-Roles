const config = require("./config.json"); //Load the config file
const Discord = require("discord.js"); //Import discord.js
const colors = require("colors"); //Allows use of colors in console
const clear = require("clear"); //Lets us clear the console
const client = new Discord.Client(); //Create Discord client instance

//Does initial setup when client is ready
client.on("ready", () => {
  clear();
  client.user.setUsername(config.username.toString());
  console.log("[OK] ".green + "[LOGIN] ".blue + "Cleared console".cyan);
  console.log("[OK] ".green + "[LOGIN] ".blue + "Connected".cyan);
  console.log("[OK] ".green + "[LOGIN] ".blue + "Logged in as: ".cyan + client.user.username + " - " + client.user.id);

  client.user.setActivity(config.prefix + "help"); //Set bot status to help message
  console.log("[OK] ".green + "[LOGIN] ".blue + "Set game".cyan);
  console.log("[OK] ".green + "[LOGIN] ".blue + "I am ready!".cyan);
  console.log("\n\n\n");
});

//Main stuff
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Ignore messages missing prefix or sent by another bot

});

client.login(config.token); //Log in bot using token from config
