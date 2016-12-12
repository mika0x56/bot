var builder = require('botbuilder');
var config = require('./config');
var conversation = require('./conversation');
  
var connector = new builder.ChatConnector({
    appId: config.microsoft.appId,
    appPassword: config.microsoft.appPassword
});
var bot = new builder.UniversalBot(connector);

conversation.add(bot);

module.exports = {
    onMessage: connector.listen()
};
