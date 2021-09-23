const express=require("express");
const router=express.Router();
const classController=require('../Controller/classController');

router.post('/createClass',classController.createClass);




module.exports=router;