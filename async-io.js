var fs = require('fs');
var filename = process.argv[2];
  fs.readFile(filename, function(err, file){
    var total = file.toString().split("\n").length - 1;
    console.log(total);
  });
