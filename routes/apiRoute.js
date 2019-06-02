// post routes

const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const { body, check } = require("express-validator/check");

// custom function for validation
const createValidationFor = data => {
  switch (data) {
    case "add":
      return [
        body("title")
          .trim()
          .escape()
          .isAlphanumeric(),
        body("data")
          .trim()
          .escape()
          .isAlphanumeric()

        // check('email').isEmail().withMessage('must be an email'),
        // check('password').not().isEmpty().withMessage('some message')
      ];

    default:
      return [];
  }
};
// check id is valid

router.post("/add-post", createValidationFor("add"), controller.post);
router.get("/get-post", controller.get);
router.get("/post/:postId", controller.getOne);
router.get("/delete/:postId", controller.getDelete);

module.exports = router;
