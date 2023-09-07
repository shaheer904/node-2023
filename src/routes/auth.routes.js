
const controller=require("./../controllers/index").auth;
const { request } = require("../middlewares/express-validator.middleware");
const {
  authSignUpValidator,
  authLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator
} = require("../validator/auth.validator");

router
  .post("/signup", authSignUpValidator, request, controller.signUp)
  .post("/login", authLoginValidator, request, controller.login);
  router.post(
    "/forgotPassword",
    forgotPasswordValidator,
    request,
    controller.forgotPassword
  );
  router.post(
    "/resetPassword/:token",
    resetPasswordValidator,
    request,
    controller.resetPassword
  );

module.exports = { prefix: "auth", router };
