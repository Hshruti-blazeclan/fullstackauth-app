var express = require("express");
var helmet = require('helmet');
var cors = require('cors');


var app = express();
app.use(cors())
app.use(helmet());

// Serve the static files from the build folder
app.use(express.static( __dirname + "/build"));
app.get("*", function(req, res){
  res.sendFile(__dirname + "/build/index.html");
});
// Listen to port 3000
app.listen(process.env.PORT || 3000);