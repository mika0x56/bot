var Builder = require('botbuilder');
var Bot = require('./bot');
var config = require('../config');
var connector = new Builder.ChatConnector({
    appId: config.microsoft.appId,
    appPassword: config.microsoft.appPassword
});
var bot = Bot(connector);

module.exports = {
    handleMessage: connector.listen()
};
