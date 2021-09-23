const express=require('express');
const bodyparser=require("body-parser");

const app=express();
const PORT=process.env.PORT || 9000;
const adminRouter=require('./Route/adminRoute');
const commonRoute=require('./Route/commonRoute');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/admin',adminRouter);
app.use('/',commonRoute);
app.listen(PORT,()=>console.log('Server start at port 3000'));