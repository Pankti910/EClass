const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const PORT=process.env.PORT || 9000;
const adminRouter=require('./Route/adminRoute');
const commonRoute=require('./Route/commonRoute');
const roleRoute=require('./Route/roleRoute');



mongoose.connect('mongodb://localhost:27017/EClassDB').then(()=>{console.log("db connected")});


//call admin router
app.use('/admin',adminRouter);
//call common router
app.use('/',commonRoute);
//call role router
app.use('/role',roleRoute);

app.listen(PORT,()=>console.log('Server start at port 9000'));