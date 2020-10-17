const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const budget = require('./budget.json');
app.use('',express.static('public'));
app.use(cors());

app.get('/budget',(req,res)=>{
    res.send(budget);    
})


app.listen(port,()=>{
    console.log(` API Served in this http://localhost:${port}`);
});