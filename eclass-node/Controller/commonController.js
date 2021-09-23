const User=require('../Model/User');
const Role=require('../Model/Role');
const db=require('../connection_db');
module.signup=async(req,res,next)=>{
     const fname=req.body.fname;
     const lname=req.body.lname;
     const email=req.body.email;
     const password=req.body.password;
     const role=req.body.role;
     const accessToken='';
     var newUser=new User(req.body);
     newUser.save().then((addednewUser)=>{
       Role.findById(mongoose.Types.ObjectId(addednewUser.role)).then((roleToadd)=>{
        roleToadd.role.push(addednewUser);
        roleToadd.save();
        });
     }).catch(err=>{console.log(err)});;
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


