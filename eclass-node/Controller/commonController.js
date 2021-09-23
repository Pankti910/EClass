var {User}=require('../Model/User');
var {Role}=require('../Model/Role');
const mongoose=require("mongoose");

exports.signup=(req,res,next)=>{
     console.log('call signup');
     var newUser=new User(req.body);
     newUser.save().then((res1)=>{
       Role.findById(mongoose.Types.ObjectId(res1.role)).then((res2)=>{
             console.log(res2);
             res2.users.push(res1);
             res2.save();

       }).catch(err=>{console.log(err)});

     });
}


exports.login=(req,res,next)=>{
    // try {
    //     const { email, password } = req.body;
    //     const user = await User.findOne({ email });
    //     if (!user) return next(new Error("email doesn't exist"));
    //     const validtePassword = await validatepassword(password, user.password);
    //     if (!validtePassword) return next(new Error("password is incorect"));
    //     const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    //         expiresIn: "1d"
    //     });
    //     await User.findByIdAndUpdate(user._id, { accessToken });
    //     res.status(200).json({
    //         data: { email: user.email, role: user.role },
    //         accessToken
    //     })

    // } catch (error) {
    //     next(error)
    // }
}


