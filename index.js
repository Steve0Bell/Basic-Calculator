const express = require('express');
const app = express();
const port = 3000;
var parser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(parser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/Calculate', function(req, res){
  fname = req.body.name;
  a = Number(req.body.num1);
  b = Number(req.body.num2);

  Result = a + b;


  res.send("<h1> Dear " + "&nbsp;" + fname +"<h1> Your Result is :" + Result );
})

app.listen(port, function(){
  console.log("Application is all set and Running on Port no :" + port);
});
