const express = require("express");
const app = express();
const db = require("./db/db");
const basicRoutes = require("./routes/route");

// routes

//get routes
app.use(basicRoutes);
// connection
db();
//routs

// port
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
