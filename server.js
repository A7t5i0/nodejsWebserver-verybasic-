var http = require('http');
var finalHandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");
var server = http.createServer( (req,res) => {
    var done = finalHandler(req,res);
    serve(req,res,done);
});
server.listen(5000);