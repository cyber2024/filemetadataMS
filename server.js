var express = require("express");
var app = express();
var path = require("path");

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
   res.render('./index'); 
});
app.post('/file', (req,res)=>{
    console.log(req.body);
});

app.listen(port, console.log('listening on %d', port));