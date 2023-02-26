const fs=require("fs");
fs.writeFile("writtenFile.txt","hello everyone",function(){console.log("written successfully")});
// will create file in parent if not present call back function is imp 