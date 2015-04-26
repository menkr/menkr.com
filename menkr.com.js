var path = require('path')
var express = require('express');
var engines = require('consolidate');

var app = express();

app.engine('html', engines.swig)
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT || 3000);
