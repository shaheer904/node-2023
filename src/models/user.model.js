const roles = require("../constants/roles");

userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(roles),
      required: true,
    },
    resetPasswordToken: String,
    resetPasswordExpires: String,
  },

  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.resetPasswordExpires;
        delete ret.resetPasswordExpires;
        delete ret.__v;
        delete ret.timestamps;
        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.resetPasswordExpires;
        delete ret.resetPasswordExpires;
        delete ret.__v;
        delete ret.timestamps;
        return ret;
      },
    },
  }
);


module.exports = mongoose.model("User", userSchema);
