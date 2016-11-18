var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    path = require('path')






    app.use('public',express.static(path.join(__dirname,'public')))

    app.set('views',__dirname + '/public/views')
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
  

    var port = 8000



    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    // app.set('view engine', 'html')
    // app.use(ejsLayouts)

  

    app.use('/',function(req,res){
        res.render('index.html')
    })



    app.listen(port,function(req,res){
        console.log("You are now on " + port)
    })