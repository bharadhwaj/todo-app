var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database');
var port     = process.env.PORT || 8888;

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


require('./app/routes.js')(app);


app.listen(port);
console.log("App listening on http://localhost:" + port);
