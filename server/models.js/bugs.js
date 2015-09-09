var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bug = new Schema (
{
  name: String,
  age: String
  }
);

process.env.DB_HOST = 'mongodb://localhost/bugs';

mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('bugs', Bug);
