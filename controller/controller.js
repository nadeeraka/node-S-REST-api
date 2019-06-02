const { validationResult, check } = require("express-validator/check");

exports.post = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    console.log(errors.array());
    res.status(400).json({ errorMSG: "bad request" });
  }

  res.status(200).json({ allgood: true });
};
