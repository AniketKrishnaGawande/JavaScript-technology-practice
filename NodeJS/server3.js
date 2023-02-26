const http=require("http");
const fs=require("fs");
http.createServer((req,resp)=>{

fs.readFile('./index.html',(err,data)=>{
    if(!err){
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write(data);
    resp.end();
    }
})


}).listen(300);