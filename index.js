/**
 * Created by santiago on 5/1/16.
 */
'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server({debug: {request: ['info', 'error']}});

// Create server
server.connection({
    host: 'localhost',
    port: 3000
});

// Add routes
var plugins = [
    {
        register: require('./src/view/UserRoute'),
        options: {
            database: 'asd'
        }

    }
];


server.register(plugins, function (err) {
    if (err) { throw err; }

    if (!module.parent) {
        server.start(function(err) {
            if (err) { throw err; }

            server.log('info', 'Server running at: ' + server.info.uri);
        });
    }
});

module.exports = server;