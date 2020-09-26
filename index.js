const express = require('express');
const  app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//Get start...........

app.get("/", (req,res) => {
    const fruit = {
        product:'bananan',
        price : 330,
    }
  
    res.send(fruit);
});
app.get("/fruit/banana",(req,res) =>{
    res.send({
        fruit:'bananan',
        quantity:55,
        price:330
    });
});
const user = ['Shawon', 'Alamin', 'Sobuj', 'Alauddin', 'Mehedy', 'Sourob'];
app.get("/user/:id", (req,res) =>{
    const id = req.params.id;
    const name = user[id];
    res.send({
       id, name
    });
})





//Get end............

//post start

app.post('/addUser',(req,res)=>{
   //post
   const user= req.body;
   user.id = 33;
   res.send(user);
});


app.listen(3000,()=>{console.log("listening to port 3000")});