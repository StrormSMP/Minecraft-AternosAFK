var http = require('http');

http.createServer(function (req, res) {
  res.write("baqiii aych");
  res.end();
}).listen(8080);
