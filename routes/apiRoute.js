// post routes

const express = require("express");
const router = express.Router();

router.post("/add-post", (req, res, next) => {
  console.log("req.body");
});

module.exports = router;
