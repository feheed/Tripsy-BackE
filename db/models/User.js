const { model, Schema } = require("mongoose");

const UserSchema = Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  age: { type: Number },
  nationality: { type: String },
  bio: { type: String },
  image: { type: String },
});

module.exports = model("User", UserSchema);
