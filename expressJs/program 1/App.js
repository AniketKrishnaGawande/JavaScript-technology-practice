const express = require('express');
const app=express();
 routes=require("./router");
app.use("/",routes);
app.listen(3100)
console.log("server started at 3000");

module.exports=app;