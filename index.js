var communication = require('./communication');
var bot = require('./bot');

communication.onMessage(bot.onMessage);
