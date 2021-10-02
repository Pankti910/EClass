const express=require("express");
const router=express.Router();
const adminController=require('../Controller/adminController');

router.get('/getUsers',adminController.getUsers);
router.post('/changeStatusUser',adminController.changeStatusUser);
module.exports=router;