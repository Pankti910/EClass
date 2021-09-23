const express=require("express");
const router=express.Router();
const roleController=require('../Controller/roleController');

router.get('/',(req,res)=>{
    roleController.getRoles
});
router.post('/',(req,res)=>{
    roleController.addRole
});
module.exports=router;