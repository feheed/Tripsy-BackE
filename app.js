const express = require("express");
const cors = require("cors");
//const path = require("path");
const passport = require("passport");
//const slugify = require("slugify");

// Routes
const userRoutes = require("./apis/users/users.routes");

// DB
const connectDB = require("./db/database");

// Passport
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routes
app.use("/api", userRoutes);

connectDB(); //connect to the database
const PORT = 8001; //connection to a host
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
