var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback){
  fs.readdir(directory ,function(err, list){
    if (err)
      return callback(err);

    var re = /(?:\.([^.]+))?$/;
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (re.exec(list[i])[1] === extension) {
        arr.push(list[i]);
      }
    }
    callback(null, arr);
  });
}
