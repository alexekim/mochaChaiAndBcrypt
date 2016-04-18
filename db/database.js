var mongoose = require('mongoose');
// this connects us to our database
// var connectionString = 'mongodb://localhost/mochaTestDb';
// caps = final, constant, important!!!!!
var connectionString = process.env.DB_HOST;
console.log('Attempting to connect to MongoDB');

mongoose.connect(connectionString); // connect to the db supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: production server');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose error! ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from: produciton server');
});
