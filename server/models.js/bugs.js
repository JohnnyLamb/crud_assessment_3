var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bug = new Schema (
{
  name: String,
  age: Number
  }
);

process.env.DB_HOST = 'mongodb://localhost/animals';

mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('bugs', Bug);
