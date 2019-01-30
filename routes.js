module.exports=function(app){
    app.get('/',(req,res)=>{
        res.end("Hello Everyone howare e");  
    });

    app.post('/me',(req,res)=>{
       let myansw={
           time:Date.now(),
           gretting:`heloo ${req.body.name} dear`

       } 
       res.json(myansw);
    })
}