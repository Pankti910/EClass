var randomString = require('randomstring');
var {User}=require('../Model/User');
var {Class}=require('../Model/Class');

const mongoose=require("mongoose");



exports.createClass=(req,res,next)=>{
    const classcode=randomString.generate({length:6});
    const creatorOfclass=req.body.creatorOfClass;
    var classCreate=new Class({
        classname:req.body.classname,
        classcode:classcode,
        creatorOfclass:creatorOfclass,
        teachers:new Array(creatorOfclass),
        students:[]});
   /* classCreate.save((err,docs)=>{
        if(err) res.status(500).send({message:`Error occur during creating class`});
        if(docs){
            creatorOfclass.classes.push(docs);
            creatorOfclass.save();
            res.status(200).send({message:`Class ${docs.classname} successfully created`})
            
        } ;
    });*/
    User.findById(mongoose.Types.ObjectId(creatorOfclass),(err,docs)=>{
        console.log(docs);
        res.send(docs);

    });   
       
}

exports.addTeacher=(req,res,next)=>{
    const teacherToadd=User.findById(req.body.userid);
    const teacherInclass=Class.findById(req.body.classId);
   // teacherInclass.teachers.push(teacherToadd);
    teacherToadd.classes.push(teacherInclass);
    teacherToadd.save().then((teachAdded)=>{
        teacherInclass.teachers.push(teachAdded);
        teacherInclass.save((err,docs)=>{
            if(err) res.status(404).json({message:`Error occur during adding teacher in class ${teacherInclass.classname}`});
            res.status(200).json({message:`${teachAdded.fname} added in class ${docs.classname}`});
        })
    });
    //teacherInclass.save();
    

}

exports.joinClassStudent=(req,res,next)=>{
    const classcode=req.body.classcode;
    const inClassToJoin=Class.find({classcode:classcode},(err,result)=>{
        if(err) res.status(500).json({message:`Error occur during joining class`});
        if(!result.length) res.status(404).json({message:`There is no such class with ${classcode}`});
        res.res.status(200).json({message:`You are successfully join in  class ${inClassToJoin.classname}`}); 
    });

}
