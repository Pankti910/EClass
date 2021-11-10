const express=require("express");
const router=express.Router();
const commonController=require('../Controller/commonController');

// router.get('/',function(req,res){
//     roleController.getRoles
// });
// router.post('/',function(req,res){
//     roleController.addRole
// });

router.post('/',commonController.login);
router.post('/signup',commonController.signup);
module.exports=router;