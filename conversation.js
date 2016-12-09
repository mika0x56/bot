var conversation = {};

conversation.add = function(bot) {
    bot.dialog('/', function (session) {
        session.send("Hello World");
    });
};

module.exports = conversation;
