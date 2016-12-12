var communication = require('./lib/communication');
var bot = require('./lib/bot');

communication.onMessage(bot.onMessage);
