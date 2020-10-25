const config = require('./config.json'); //Load the config file
//const logfile = require('./log.txt');
const Discord = require('discord.js'); //Import discord.js
const colors = require('colors'); //Allows use of colors in console
const clear = require('clear'); //Lets us clear the console
const client = new Discord.Client(); //Create Discord client instance

//Logger
function mlog(status, type, message) {
  let cmsg = []; //Array for console message
  let lmsg = []; //Array for log message
  let d = new Date();
  let ctime = [d.getHours(), d.getMinutes(), d.getSeconds()];

  switch (status) { //Add status to arrays
    case 'INFO':
      console.log('['.white + ctime.join(':').cyan + ' INFO'.green+']: '.white + type.white + ' - '.white+message.white);
      break;
    case 'WARN':
      console.log('['.white + ctime.join(':').cyan + ' WARN'.yellow + ']: ' + type.white + ' - '.white+message.white);
      break;
    case 'ERROR':
      console.log('['.white + ctime.join(':').cyan + ' ERROR'.red + ']: ' + type.white + ' - '.white + message.white);
      break;
  }
}

//Does initial setup when client is ready
client.on('ready', () => {
  clear();
  client.user.setUsername(config.username.toString());
  mlog('INFO', 'LOGIN', 'Cleared Console');
  mlog('INFO', 'LOGIN', 'Connected');
  mlog('INFO', 'LOGIN', 'Logged in as ' + client.user.username + ' ' + client.user.id);

  client.user.setActivity(config.prefix + 'help'); //Set bot status to help message
  mlog('INFO', 'SETUP', 'Set game to ' + config.prefix + 'help');
  mlog('INFO', 'SETUP', 'I am ready!')
});

//Main stuff
client.on('message', (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Ignore messages missing prefix or sent by another bot

});

client.login(config.token); //Log in bot using token from config
