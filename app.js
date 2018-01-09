var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var route = require('./routes/route');
var path = require('path');
var morgan = require('morgan');
//var cors = require('cors');

//connect to database
mongoose.connect('mongodb://localhost:27017/todos');
mongoose.connection.on('connected', function(){
  console.log('Connected to mongodb');
});
mongoose.connection.on('error', function(err){
  console.log('Error connecting to mongodb: ' + err);
});

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
//app.use(cors());
app.use(morgan('dev'));
app.use('/api', route);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
  res.sendfile('./public.index.html');
});

app.listen(3000, function(){
  console.log('Server started at: http://localhost:3000');
});
