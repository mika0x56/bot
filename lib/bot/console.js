var Builder = require('botbuilder');
var Bot = require('./bot');
var connector = new Builder.ConsoleConnector().listen();
var bot = Bot(connector);

module.exports = { };
