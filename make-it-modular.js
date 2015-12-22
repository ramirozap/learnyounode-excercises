var myModule = require('./make-it-modular-module.js');
var path = process.argv[2];
var extension = process.argv[3];


var arr = myModule(path, extension, function(err, data){
  if (err)
    return console.error('There was an error:', err)
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
  }
});
