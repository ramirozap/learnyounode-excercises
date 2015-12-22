var net = require('net');
function dateBuild(){
  var date = new Date();
  var year = date.getFullYear()
  var month = +date.getMonth() + 1
  var day = date.getDate()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  if (month < 10) {
    month = "0" + month
  }
  if (day < 10) {
    day = "0" + day
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (hours < 10){
    hours = "0" + hours
  }
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}
var server = net.createServer(function (socket) {
  // socket handling logic
  //socket.write()
  socket.end(dateBuild() + "\n")
})
server.listen(process.argv[2]);
