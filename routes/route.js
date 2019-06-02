// basic get routes

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("hello");
});

module.exports = router;
