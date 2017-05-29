const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Declaring Global promises
mongoose.connect('mongodb://pallavi:pallavi@127.0.0.1:27018/blog_db1'); //connecting to yt db

mongoose.connection.once('open',function(){
  console.log('Successfully Connected To DB !');
}).on('error',function(){
  console.log('Cannot Connect To DB!');
});
