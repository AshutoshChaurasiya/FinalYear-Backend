const Express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");
// var path = require('path');

// var uploadRouter = require('./routes/upload');

//create express instance/object
const express = new Express();
express.use(cors());
express.use(bodyParser.json());
express.options('*', cors());