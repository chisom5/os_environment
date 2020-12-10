const express = require('express');
var cors = require('cors');
const logger = require("morgan");
const bodyParser = require("body-parser");
//create express app
const app = express();

//enable cors
app.use(cors())
//log request to console
app.use(logger('dev'));
// body parser and morgan
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//utility functions
const handleRedirect = (req, res) =>{
    const {CallBackUrl, AppId, UserName}=req.query;
    const toRedirectUrl=decodeURIComponent(CallBackUrl)+`?${AppId}_ClientUserName=${UserName}&AppId=${AppId}`;
    res.redirect(toRedirectUrl);
  }

//api endpoints
app.get('/', handleRedirect);


const port = process.env.port || 4000;
app.listen(port);
console.log(`App running on port: ${port}`)