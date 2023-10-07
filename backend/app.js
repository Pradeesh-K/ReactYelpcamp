if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5555;
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
// import cors from 'cors';
const cors = require('cors');

//Middleware to parse req body
app.use(express.json());

//to permit cors
app.use(cors());
// To be written later on
// const ExpressError = require("./utils/ExpressError");
// const campgroundRoutes = require("./routes/campgrounds");
// const reviewRoutes = require("./routes/reviews");
// const userRoutes = require("./routes/users");
// const User = require("./models/user");

app.get('/',(req,res) => {
  return res.status(234).send("Welcome to Yelpcamp using React");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
