var express = require('express');
var bodyParser = require('body-parser');
var app=express();


app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.all('/*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if(req.method=='OPTIONS'){
        res.status(200).end();
    }else{
        next();
    }
});

app.use('/api',require('./src/api/index'));

var server=app.listen(9090,function(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at %s %s",host,port);
});