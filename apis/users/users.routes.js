const express = require("express");
const passport = require("passport");
const { signup, signin } = require("./users.controllers");

// Create a mini express application
const router = express.Router();

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
