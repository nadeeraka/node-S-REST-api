const express = require("express");
const app = express();
const db = require("./db/db");
const basicRoutes = require("./routes/route");
const apiRoutes = require("./routes/apiRoute");
const bodyParser = require("body-parser");

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes

//get routes
app.use(basicRoutes);
//post routes
app.use(apiRoutes);
// connection
db();
//routs

// port
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
