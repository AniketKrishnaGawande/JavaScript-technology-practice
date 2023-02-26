const express =require("express");
const router=express.Router();
const logic=require('../BL/Logic');

router.get("/",(req,resp)=>{
  resp.send(logic.display());
});

module.exports=router;