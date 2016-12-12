var communication = require('./lib/communication');
var bot = require('./lib/bot/http');

communication.onMessage(bot.handleMessage);
