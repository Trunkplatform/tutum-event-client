require('console-stamp')(console, '[dd/mmm/yyyy HH:MM:ss.l]');
var WebSocket = require('ws');
var util = require( "util" );

var token = process.env.TUTUM_APIKEY;
var username = process.env.TUTUM_USER;
var connection_string = util.format("wss://stream.tutum.co/v1/events?token=%s&user=%s", token, username);
console.log(connection_string);
var ws = new WebSocket(connection_string);

ws.on('open', function open() {
    console.log("connected");
});

ws.on('message', function(data) {
    var message = JSON.parse(data);
    if (message.state === 'Success') { // && (message.parents.indexOf('/api/v1/service/193306e2-276d-4d6c-968c-c36f59248d0f/') > 1)) {
        console.log(data);
    }
});