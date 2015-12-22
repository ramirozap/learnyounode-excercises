var fs = require('fs');
var path = process.argv[2];
fs.readdir(path,function(err, list){
  var extension = process.argv[3];
  var re = /(?:\.([^.]+))?$/;
  for (var i = 0; i < list.length; i++) {
    if (re.exec(list[i])[1] === extension) {
      console.log(list[i]);
    }
  }
});
