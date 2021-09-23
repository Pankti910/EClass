const express=require("express");
const router=express.Router();
const adminController=require('../Controller/adminController');

router.get('/',adminController.getUsers);

module.exports=router;