var http = require('http');
var url = process.argv[2];
var result = "";
var counter = 2
var printData = function(url, counter, printData){
  http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on("data", function(data) {
      result = result + data;
    });
    response.on("end",function(){
      counter++;
      console.log(result);
      result = "";
      if (counter < process.argv.length) {
        var url = process.argv[counter];
        printData(url, counter, printData);
      }
    });
    response.on("error",console.error);
  })
}


printData(url, counter, printData);
