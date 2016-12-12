var builder = require('botbuilder');

module.exports = function(connector) {
    var bot = new builder.UniversalBot(connector);
    var intents = new builder.IntentDialog();

    bot.dialog('/', intents);

    intents.matches(/^change animal/i, [
        function (session) {
            session.beginDialog('/animal');
        },
        function (session, results) {
            session.send('Ok... Changed your favorite animal to %s', session.userData.animal);
        }
    ]);

    intents.onDefault([
        function (session, args, next) {
            if (!session.userData.animal) {
                session.beginDialog('/animal');
            } else {
                next();
            }
        },
        function (session, results) {
            session.send('%s is an excellent choice, sir.', session.userData.animal);
        }
    ]);

    bot.dialog('/animal', [
        function (session) {
            builder.Prompts.choice(session, 'Hi! What is your favorite animal?', "cat|dog|crocodile");
        },
        function (session, results) {
            session.userData.animal = results.response.entity;
            session.endDialog();
        }
    ]);
};
