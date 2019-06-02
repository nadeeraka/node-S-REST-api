const express = require("express");
const app = express();

//routs

app.get("/", (req, res, next) => {
  res.status(200).send("hello");
});
// port
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
