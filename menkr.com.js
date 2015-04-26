var path = require('path')
var express = require('express');
var engines = require('consolidate');
var configs = require('./configs.json');

var app = express();

app.engine('html', engines.swig);
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(configs.port || 3000);
