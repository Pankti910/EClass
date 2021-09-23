var randomString = require("randomstring");
const User=require('../Model/User');
const Class=require('../Model/Class');
const { request } = require("http");


exports.createclass=(req,res,next)=>{
    const classcode=randomString.generate({length:6});
    const creatorOfclass=req.body.creatorOfClass;
    var classCreate=new Class({
        classname:req.body.classname,
        classcode:classcode,
        creatorOfclass:creatorOfclass,
        teachers:[creatorOfclass],
        students:[]});
    classCreate.save((err,docs){
        if(err) res.send({message:"Error occur while creating class"});
        if(docs) res.send({message:"Class successfully created"});
    });    
       
}

exports.addTeacher=(req,res,next)=>{
    const teacherToadd=User.findById(request.body.userid);
    const teacherInclass=Class.findById(req.body.classId);
    teacherInclass.teachers.push(teacherToadd);
    teacherToadd.classes.push(teacherInclass);
    teacherToadd.save();
    teacherInclass.save();
    

}

exports.joinClass_student=(req,res,next)=>{
    const classcode=req.body.classcode;
    const inClassToJoin=Class.find({classcode:classcode},(err,result)=>{
        if(err) res.send({message:"Error occur while joining class"});
        if(!result.length) res.send({message:`There is no such class with ${classcode}`});
        res.send({message:`You are successfully join in  class ${inClassToJoin.classname}`}); 
    });

}
