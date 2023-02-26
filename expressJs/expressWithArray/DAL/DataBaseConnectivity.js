const DB = require('../Data base/dataBase');
console.log("db connected");
exports.connection=()=>{
return DB;
}