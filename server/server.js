const path= require('path');
const express =require('express');
const app = express();
const publicpath=path.join(__dirname,"..",'dist');

app.use(express.static(publicpath));


app.get('*',(req,res)=>{
    res.sendFile(path.join(publicpath,'index.html'));
})
app.listen(3000,()=>{
    console.log('done');
    
})
