const controller = require("./../controllers/index").user;
const { request } = require("../middlewares/express-validator.middleware");
const {
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validator/auth.validator");
const { restrictTo } = require("./../middlewares/jwt.middleware");
router.get("/", restrictTo(["successSeeker"]), controller.getUser);


module.exports = { prefix: "user", router };
