var express = require('express');
var app = express();

const PORT = 8080;
app.listen(PORT,() =>{
    console.log(` SERVER IS RUNNING ON PORT ${PORT}.`);

});

app.get('/', function (req, res){
    res.send ('<h1>Hello World from 92 </h1.');

})