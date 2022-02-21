const express = require("express");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const morgan = require("morgan");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

//const slugify = require("slugify");

// Routes
const userRoutes = require("./apis/users/users.routes");
const tripRoutes = require("./apis/trips/trips.routes");

// DB
const connectDB = require("./db/database");

// Passport
const { localStrategy, jwtStrategy } = require("./middleware/passport");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);
app.use((req, res, next) => {
  if (req.body.name === "Broccoli Soup")
    res.status(400).json({ message: "I HATE BROCCOLI!! KEEFY! " });
  else next();
});

// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

// Routes
app.use("/api", userRoutes);
app.use("/api/trips", tripRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

//handling error
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(errorHandler);

connectDB(); //connect to the database
const PORT = 8001; //connection to a host
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
