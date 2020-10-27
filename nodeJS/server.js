var http = require("http");
var url = require("url");
/*
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8888);

*/


function iniciar(route, handle){
  http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    console.log("Peticion para " + url.parse(request.url).pathname + " recibida")

    route(handle, url.parse(request.url).pathname);

    response.write("Hola Mundo");
    response.end();
  }).listen(8888);
  console.log("Servidor inicializado. ")
}
exports.iniciar= iniciar;
