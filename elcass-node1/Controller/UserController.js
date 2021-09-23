const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { roles } = require("../role");

async function hashPassword(password) {

    return bcrypt.hash(password, 10);
    //console.log(hash);
    //return hash;
}

async function validatepassword(plainpassword, hashedpassword) {
    return await bcrypt.compare(plainpassword, hashedpassword);

}

// exports.signup = async (req,res,next)=>{
//     console.log(req.body.name);
//     try{
//         //const hashpassword=await hashPassword(req.body.password);
//         const hashpassword= await bcrypt.hash(req.body.password, 10);
//         const{email,password,role}= req.body;


//        //console.log(hashpassword);
//         const newUser=new User({email,password:hashpassword,role:role || 'basic'});
//         const accessToken=jwt.sign({userId:newUser._id},process.env.JWT_SECRET,{
//             expiresIn:"1d"
//         });
//         newUser.accessToken=accessToken;
//         await newUser.save();
//         res.json({
//             data:newUser,
//             accessToken
//         });
//     }

//     catch(error)
//     {   console.log(error);
//         next(error);
//     }
// }
exports.signup = async (req, res, next) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const role = req.body.role;
        const hashedPassword = await hashPassword(password);
        //console.log(hashedPassword);
        const newUser = new User(
            {
                email: req.body.email,
                password: hashedPassword,
                role: role || "basic"

            });
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        newUser.accessToken = accessToken;
        await newUser.save();
        res.json({
            data: newUser,
            accessToken
        })
    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return next(new Error("email doesn't exist"));
        const validtePassword = await validatepassword(password, user.password);
        if (!validtePassword) return next(new Error("password is incorect"));
        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        await User.findByIdAndUpdate(user._id, { accessToken });
        res.status(200).json({
            data: { email: user.email, role: user.role },
            accessToken
        })

    } catch (error) {
        next(error)
    }
}

exports.getUsers = async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json({
        data: users
    });
}
exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById({ userId })
        if (!user) return next(new Error("user doesn't exist")
        )
        res.status(200).json({
            data: user
        });
    }
    catch (Error) { next(Error) }

}
exports.updateUser = async (req, res, next) => {
    console.log("hello");
    try {
        const userId = req.params.userId;
        console.log(userId);
        const update = req.body
        console.log(update);
        await User.findByIdAndUpdate({ _id: userId }, update);
        // const user=await User.findById(userId)
        res.status(200).json({
            data: user,
            message: 'user has been updated'
        });

    } catch (Error) {
        next(Error)
    }
}
exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
        data: null,
        message: 'user has been deleted'
    })

}

exports.grantAccess = function (action, resource) {   //console.log("hello");
    return async (req, res, next) => {
        try {
            const permission = await roles.can(req.user.role)[action](resource);
            console.log(permission);
            if (!permission.granted) {
                return res.status(401).json({
                    error: "You don't have permission to perform this action"
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.allowIfLoggedin = async (req, res, next) => {

    try {

        //const user1=new User(req.locals.loggedInUser);
        //console.log( res.locals.loggedInUser);
        const user2 = res.locals.loggedInUser;
        console.log(user2);
        if (!user2) {

            return res.status(401).json({
                error: "You need to be logged in to access this route"
            });
        }
        req.user = user2;
        console.log(req.user);
        next()
    } catch (error) {
        next(error)
    }
}
