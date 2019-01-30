const express=require('express');
const app=express();

const routes=require('./routes');
const fixedtoken="abc";
//mapp.use(bodyparser.json());

app.use('/pub',express.static("public"));
app.use('/api',function(req,res,next){
let token=req.header('token');
if(!token){
  res.json({
   message:"user not  Authoriged"   
  }).status(401);
}else{
if(token===fixedtoken){
return next();   
}else{
    res.json({
        message:"wrong token"   
       }).status(401)
}
}})


/*app.use('/api',.middeleware);
app.get('/pub/style.css',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public/style.css'));
});*/
app.get('/api/helo',(req,res)=>{
    res.json({
        message:"helo World"
    })   
})
routes(app);
app.listen(4000);