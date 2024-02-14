const express = require('express')
const app = express()


//routes

app.get('/',(req,res) =>{
    res.send('hello node api')

})

app.listen(5000,() =>{
    console.log('node api is running on port 5000')
})