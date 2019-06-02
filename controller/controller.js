const { validationResult, check } = require("express-validator/check");
const Post = require("../models/addPost");

const createUser = async (title, data, date) => {
  const newUser = new Post({
    title: title,
    data: data,
    date: date
  });

  try {
    const data = await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

exports.post = async (req, res, next) => {
  const title = req.body.title;
  const data = req.body.data;
  const date = req.body.date;

  const errors = validationResult(req);

  if (errors.array().length > 0) {
    console.log(errors.array());
    return res.status(400).json({ errorMSG: "bad request" });
  }
  const newUser = createUser(title, data, date);

  res.status(200).json({ allgood: true });
};
