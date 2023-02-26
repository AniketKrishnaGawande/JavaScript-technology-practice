const fun= require("./module/module");
const url=require("url");
const http=require("http");
const fs=require("fs");
http.createServer(function (req,resp)
{
var q=url.parse(req.url,true);
switch(q.pathname)
{
    case "/square" :
        var rs=fs.createReadStream("./views/sqaure.html");
        rs.pipe(resp);
        break;

        case "/squSubmit" :
            resp.writeHead(200,{"content-type":"text/html"});
            var ans = fun.area(q.query.side);
            resp.write(ans);
            break;
}


}).listen(3000);
console.log("4200 server started");




