const express = require("express");

const PORT = 3001;

const app = express();



app.get('/test', (req,res)=>{
    res.json({message: "MIGO GAMED"});
    
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});