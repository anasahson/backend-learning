const express = require('express')
require('dotenv').config()
const app  = express()
const port =  process.env.PORT;


app.get('/home',(req,res)=>{
    res.send('welcome the homepage ')
})
app.get('/login',(req,res)=>{

    res.send('welcome to the login page ')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  


app.listen(port,()=>{
    console.log(`Server is running in port  ${port} `);
    
})
