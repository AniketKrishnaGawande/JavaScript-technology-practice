const http=require("http");
const module1=require("./module")
http.createServer(function(req,resp){

resp.writeHead(200,{"content-type":"text/html"})
var str=module1.numbers();
resp.write(str);
resp.end();
}).listen(2000);