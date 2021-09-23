const express=require("express");
const router=express.Router();
const adminController=require('../Controller/adminController');

router.get('/getUsers',adminController.getUsers);

module.exports=router;