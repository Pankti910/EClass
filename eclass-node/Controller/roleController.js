const Role = require('../Model/Role');


exports.addRole=(req,res,next)=>{
    console.log('add role called');
    const newRole=new Role(req.body);
    newRole.save((err,docs)=>{
        if(err) res.send({message:`Error occur during adding class`});
        res.send({message: `New role is successfully added`});
        console.log(docs);
    });
}

exports.getRoles=(req,res,next)=>{
    Role.find((err,roles)=>{
        if(!err) res.send(roles);
        console.log(roles);
        console.log(`Error occur while retriving data:`+JSON.stringify(err,undefined,2));
    });
}

exports.getUsersByRole=(req,res,next)=>{

}
