const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));














app.listen(3000, function{
    console.log("Server listning on port 3000");
    
})