const json=require('../DAL/DataBaseConnectivity');
const ob=json.connection();
console.log(json.DB);
exports.display=()=>{
    console.log(ob);
    return ob;
}
