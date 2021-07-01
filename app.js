const express = require ("express");
require("./db/conn");
const Login = require("./validate");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.post("/validate", (req,res) =>{
    console.log(req.body);
    const data = new Login(req.body);
    data.save().then(()=>{
        res.send(data);
    }).catch((e)=>{
        res.send(e);
    })

})
app.listen(port , ()=>{
    console.log(`connection is setup at ${port}`);
})