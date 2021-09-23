const express=require("express");
const router=express.Router();
const usercontroller=require("../Controller/UserController");
router.put('/Users/:userId',usercontroller.allowIfLoggedin,usercontroller.grantAccess('updateAny','profile'),usercontroller.updateUser);
router.delete('/Users/:userId',usercontroller.allowIfLoggedin,usercontroller.grantAccess('deleteAny','profile'),usercontroller.deleteUser);
router.post('/signup',
    
    usercontroller.signup
   
    //console.log("hello");
);
router.post('/login',usercontroller.login);
router.get('/Users/:userId',usercontroller.allowIfLoggedin,function(req, res){usercontroller.getUser});
router.get('/Users',usercontroller.allowIfLoggedin,usercontroller.grantAccess('readAny','profile'),usercontroller.getUsers);


module.exports=router;