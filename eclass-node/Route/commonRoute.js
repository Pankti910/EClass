const express=require("express");
const router=express.Router();
const commonController=require('../Controller/commonController');

router.get('/',(req,res)=>{
    commonController.login;
});
router.post('/',(req,res)=>{
    commonController.signup
}
);

module.exports=router;