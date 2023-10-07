if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const MongoStore = require("connect-mongo");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/ReactYelpcamp";

// To be written later on
// const ExpressError = require("./utils/ExpressError");
// const campgroundRoutes = require("./routes/campgrounds");
// const reviewRoutes = require("./routes/reviews");
// const userRoutes = require("./routes/users");
// const User = require("./models/user");

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
