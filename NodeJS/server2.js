const http=require("http");
var obj = {
    "id":12,
    "name":"aniket",
    "course":"pgdac"
}
function objDetails(req,resp){
resp.writeHead(200,{"content-type":"text/html"})
resp.write(JSON.stringify(obj));
}
http.createServer(objDetails).listen(3000)
