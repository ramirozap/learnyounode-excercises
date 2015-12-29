var http = require('http');
var url = require('url');
var port = process.argv[2];
var server = http.createServer(function(request, response){
  var requestUrl = url.parse(decodeURI(request.url), true);
  var iso = requestUrl.query.iso;
  var date = new Date(iso);
  var dateJson = {}
  if (requestUrl.pathname === "/api/unixtime") {
    dateJson.unixtime = Date.parse(iso);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(dateJson));
  }else if (requestUrl.pathname === "/api/parsetime") {
    dateJson.hour = date.getHours();
    dateJson.minute = date.getMinutes();
    dateJson.second = date.getSeconds();
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(dateJson));
  }else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
