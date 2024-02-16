const express = require('express')
const mongoose = require('mongoose')
const Policy= require('./models/productmodel')
const app = express()


app.use(express.json())

app.get('/',(req,res) =>{
    res.send('hello node api')

})

app.post('/policyholder', async(req,res) =>{
   
    try {
        console.log(req.body)
        const policyholder = await Policy.create(req.body)
        res.status(200).json(policyholder);
        
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})

//update a policy holder
app.put('/policyholder/:id', async(req,res) =>{
    try {
              const{id} =req.params;
             const policyholder =await Policy.findByIdAndUpdate(id,req.body);
 //we cannot find any policyholder in data base
             if(!policyholder){
            return res.status(404).json({message: `cannot find any policyholder with ID ${id}`})
    }


    const updatedpolicyholder = await Policy.findById(id);
    res.status(200).json(updatedpolicyholder);

}    catch (error)  {
    res.status(500).json({message:error.message})
}
})

//delete a policyholder
app.delete('/policyholder/:id',async(req,res)=>{
try {
 const{id} =req.params;
 const policyholder =await Policy.findByIdAndDelete(id);
 if(!policyholder){
    return res.status(404).json({message: `cannot find any policyholder with ID ${id}`})

 }
 res.status(200).json(policyholder);
}catch (error){
    res.status(500).json({message:error.message})

}

})



app.listen(3000, async() =>{
    console.log('node api is running on port 3000')
})


mongoose.set("strictQuery", true); 
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}; 


mongoose.connect("mongodb+srv://ravi:ravi123@cluster0.1egcrvd.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });