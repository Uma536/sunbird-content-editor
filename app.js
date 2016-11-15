var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser');

http.globalAgent.maxSockets = 100000;

var app = express();

// all environments
app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '.')));

var routes = __dirname + '/server/routes', route_files = fs.readdirSync(routes);
route_files.forEach(function (file) {
    require(routes + '/' + file)(app, __dirname);
});

var server = http.createServer(app).listen(app.get('port'), 1500);
server.timeout = 0;