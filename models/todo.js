var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String
});

var Todo = module.exports = mongoose.model('Todo', TodoSchema);
