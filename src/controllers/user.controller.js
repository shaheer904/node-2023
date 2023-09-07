const { raw } = require("express");
const { async } = require("fast-glob");
const errorHelper = require("../helper/error.helper");
const userModel = require("../models").user;

const { encryptPassword, comparePassword } = require("../helper/bcrypt.helper");
module.exports.getUser = async (req, res, next) => {
  try {
    const { user } = req;
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
