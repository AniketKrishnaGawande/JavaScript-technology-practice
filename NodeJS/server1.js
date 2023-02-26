const http= require("http");
const fs=require("fs");
var info = "hi My name is Aniket Gawande";

http.createServer(function(request,response)
{

    response.writeHead(200,{"content-type":"text/html"});
rs=fs.createReadStream("../writtenFile.txt" );
  response.write(`<h1>${info}</h1>`);
rs.pipe(response)


      // response.end();
}).listen(3000);
console.log("server started at 3000 post");


