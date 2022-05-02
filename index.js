require("dotenv").config();
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const Route = require("./routes/index");
const connectdb = require("./config/db");

connectdb();

// enable CORS without external module

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    next();
  });

  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Use routes
  app.use("/v1/api", Route);

  const port = process.env.PORT || 6000;

  app.listen(port, () => console.log(`Backend run on ${port}`))