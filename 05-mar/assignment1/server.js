const express = require("express")
const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
   res.status(200).send("Hello World!")
})
app.get('/login',(req,res)=>{
    res.status(404);
 })
app.listen(PORT,()=>console.log(`Server started at localhost://${PORT}`));
