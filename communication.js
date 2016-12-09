var restify = require('restify');
var config = require('./config');
var server = restify.createServer();
var onMessage;

server.listen(config.port, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

server.post('/api/messages', function(){
    if (onMessage) {
        onMessasge.apply(this, arguments);
    }
});

module.exports = {
    onMessage: function(cb) {
        onMessage = cb;
    }
};
