const express=require("express");
var app=express(); // object of express
var bodyparser=require("body-parser"); // url parser
const memparr=require("./moduleemparr"); // importing our own module having array 

app.use(bodyparser.urlencoded({extended:false}));


app.get("/",function(req,resp){  // when visiting site show empform
  resp.sendFile("public/empform.html",{root:__dirname}); // this empform after submit calls /empdata url
});

app.get("/empdata",function(req,resp){
  if(req.query.btn==="add"){ // checking pressed button is add
        var id=parseInt(req.query.id); // fetching send data
        var name=req.query.name;
        var desg=req.query.desg;
        var ob={id,name,desg}; // object of fetched datais created  
        memparr.isertEmp(ob);   // it is given to function where array present
        console.log(memparr.getlength());  
        resp.send("<h1>added successfully</h1>")
  }
  else{ // pressed button is search
    var id=req.query.id;
    var ob=memparr.searchEmp(id);
    if(ob!=null){
      resp.send(JSON.stringify(ob)); // javascript object to json
      //resp.send("id: "+ob.id+"<br>name: "+ob.name+"<br> Desg : "+ob.desg);
    }
    else{
      resp.send("Employee not found");
    }

  }
  })
  
  app.listen(3000);
  console.log("server running at port 3000");


