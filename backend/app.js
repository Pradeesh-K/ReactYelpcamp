if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5555;
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/ReactYelpcamp";

// ejsMate for templates - obsolete as I use react
const ejsMate = require("ejs-mate");

// import cors from 'cors';
const cors = require("cors");

//Middleware to parse req body, JSON Data
app.use(express.json());

//to parse URL-encoded data(e.g., data coming from an HTML form using the POST method), the req.body which is required to update a database
app.use(express.urlencoded({ extended: true }));

//to permit cors
app.use(cors());

//sessions
// const session = require("express-session");
// const secret = process.env.SECRET || "thisshouldbeabettersecret!";
// const MongoStore = require("connect-mongo");
// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   touchAfter: 24 * 60 * 60, //lazy update session, we save after this time
//   crypto: {
//     secret: "thisshouldbeabettersecret!",
//   },
// });
// store.on("error", function (e) {
//   console.log("Session store error", e);
// });

// const sessionConfig = {
//   store,
//   name: "session",
//   secret,
//   resave: false,
//   saveUninitialized: true,

//   cookie: {
//     httpOnly: true,
//     expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//     maxAge: 1000 * 60 * 60 * 24 * 7,
//     // secure: true
//   },
// };

// app.use(session(sessionConfig));

//Flash
// const flash = require("connect-flash");
// app.use(flash());

// mongo sanitize - Not sure if it hurts the app
const mongoSanitize = require("express-mongo-sanitize");
app.use(mongoSanitize());

//authentication 
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//Content security policy for later stage
// const helmet = require("helmet");
// app.use(helmet());
// const scriptSrcUrls = [
//   "https://stackpath.bootstrapcdn.com/",
//   "https://api.tiles.mapbox.com/",
//   "https://api.mapbox.com/",
//   "https://kit.fontawesome.com/",
//   "https://cdnjs.cloudflare.com/",
//   "https://cdn.jsdelivr.net",
// ];
// const styleSrcUrls = [
//   "https://kit-free.fontawesome.com/",
//   "https://stackpath.bootstrapcdn.com/",
//   "https://api.mapbox.com/",
//   "https://api.tiles.mapbox.com/",
//   "https://fonts.googleapis.com/",
//   "https://use.fontawesome.com/",
//   "https://cdn.jsdelivr.net",
// ];
// const connectSrcUrls = [
//   "https://api.mapbox.com/",
//   "https://a.tiles.mapbox.com/",
//   "https://b.tiles.mapbox.com/",
//   "https://events.mapbox.com/",
// ];
// const fontSrcUrls = [];
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: [],
//       connectSrc: ["'self'", ...connectSrcUrls],
//       scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
//       styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
//       workerSrc: ["'self'", "blob:"],
//       objectSrc: [],
//       imgSrc: [
//         "'self'",
//         "blob:",
//         "data:",
//         "https://res.cloudinary.com/dt6vwovu0/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
//         "https://images.unsplash.com/",
//       ],
//       fontSrc: ["'self'", ...fontSrcUrls],
//     },
//   })
// );

//Connecting Database
mongoose
  .connect(dbUrl) //27017 is the standard port number for mongoDB if db doesn't exist it is created
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("Oh no, Mongo express error");
    console.log(err);
  });

//Test route
// app.get('/',(req,res) => {
//   return res.status(234).send("Welcome to Yelpcamp using React");
// });

// Sessions to make the current user available at all templates
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user; // to make the current user available at all templates
//   //Figure out how to flash in React
//   // res.locals.success = req.flash("success");
//   // res.locals.error = req.flash("error");
//   next();
// });

app.use("/campgrounds", campgroundRoutes);

//Figure out what this express error does
app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found Error 404", 404));
});

// We dont use res.render in react, we render as components accordingly
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
  //create an Error template in React
  // res.status(status).render("error", { err });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
