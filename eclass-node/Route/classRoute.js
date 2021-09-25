const express=require("express");
const router=express.Router();
const classController=require('../Controller/classController');

router.post('/createClass',classController.createClass);
router.post('/joinclass',classController.joinClassStudent);



module.exports=router;