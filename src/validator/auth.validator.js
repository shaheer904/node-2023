const { body } = require("express-validator");

const authSignUpValidator = [
  body("email")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isEmail()
    .withMessage(messages.inValidEmail),
  body("password")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isLength({ min: 6 })
    .withMessage(messages.invalidLength(6)),
  body("firstName")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isLength({ min: 3 })
    .withMessage(messages.invalidLength(3)),
  body("lastName")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isLength({ min: 3 })
    .withMessage(messages.invalidLength(3)),
];

const authLoginValidator = [
  body("email")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isEmail()
    .withMessage(messages.inValidEmail),
  body("password")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isLength({ min: 6 })
    .withMessage(messages.invalidLength(6)),
];
const forgotPasswordValidator = [
  body("email")
    .exists()
    .withMessage(messages.notPresent)
    .notEmpty()
    .withMessage(messages.notEmpty)
    .isEmail()
    .withMessage(messages.inValidEmail),
];
const resetPasswordValidator=[
  body("password")
  .exists()
  .withMessage(messages.notPresent)
  .notEmpty()
  .withMessage(messages.notEmpty)
  .isLength({ min: 6 })
  .withMessage(messages.invalidLength(6)),
  body("confirmPassword")
  .exists()
  .withMessage(messages.notPresent)
  .notEmpty()
  .withMessage(messages.notEmpty)
  .isLength({ min: 6 })
  .withMessage(messages.invalidLength(6)),
]
module.exports = {
  authSignUpValidator,
  authLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator
};
