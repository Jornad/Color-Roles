const config = require('./config.json'); //Load the config file
//const logfile = require('./log.txt');
const Discord = require('discord.js'); //Import discord.js
const colors = require('colors'); //Allows use of colors in console
const clear = require('clear'); //Lets us clear the console
const client = new Discord.Client(); //Create Discord client instance

//Logger
function mlog(status, type, color, message, mcolor) {
  let cmsg = []; //Array for console message
  let lmsg = []; //Array for log message

  switch (status) { //Add status to arrays
    case 'OK':
      lmsg.push('[OK]');
      break;
    case 'WARN':
      cmsg.push('[WARN] ');
      lmsg.push('[WARN] ');
      break;
    case 'ERROR':
      cmsg.push('[ERROR] ');
      lmsg.push('[ERROR] ');
      break;
  }

  cmsg.push('[' + type + ']'); //Add type tag and color it to console message
  lmsg.push('[' + type + ']'); //Add type tag to log message

  console.log(cmsg.join(''));
}

//Does initial setup when client is ready
client.on('ready', () => {
  clear();
  client.user.setUsername(config.username.toString());
  mlog('OK', 'LOGIN', 'blue', 'Cleared Console', 'cyan');
  /*
  console.log('[OK] '.green + '[LOGIN] '.blue + 'Cleared console'.cyan);
  console.log('[OK] '.green + '[LOGIN] '.blue + 'Connected'.cyan);
  console.log('[OK] '.green + '[LOGIN] '.blue + 'Logged in as: '.cyan + client.user.username + ' - ' + client.user.id);
*/

  client.user.setActivity(config.prefix + 'help'); //Set bot status to help message
  /*
  console.log('[OK] '.green + '[LOGIN] '.blue + 'Set game'.cyan);
  console.log('[OK] '.green + '[LOGIN] '.blue + 'I am ready!'.cyan);
  console.log('\n\n\n');
  */
});

//Main stuff
client.on('message', (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return; //Ignore messages missing prefix or sent by another bot

});

client.login(config.token); //Log in bot using token from config
