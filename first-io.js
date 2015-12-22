var fs = require('fs');
var filename = process.argv[2];
var str = fs.readFileSync(filename).toString();
var total = str.split("\n").length - 1;
console.log(total);
