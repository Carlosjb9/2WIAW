const port = 3000;
var express = require("express"),
  fs = require("fs"),
  app = express(),
  server = require("https").createServer(
    {
      cert: fs.readFileSync("/app/host.cert"),
      key: fs.readFileSync("/app/host.key"),
    },
    app
  ),
  path = require("path"),
  sessions = require("express-session"),
  mongoose = require("mongoose");

server.listen(port, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${port}`);
});

mongoose.connect(
  `mongodb://root:pass12345@mongodb:27017/login?authSource=admin`,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERROR: connecting to Database.  ${err}`);
    else console.log(`Database Online`);
  }
);

// view engine setup and other configurations
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  sessions({
    secret: "laprincesaprometida",
    cookie: { maxAge: 500000, secure: false },
    saveUninitialized: false,
    resave: false,
  })
);

/*Middleware to inizialitze the session Auth with false */
app.use((req, res, next) => {
  if (req.session.auth == null) {
    req.session.auth = { isAuth: false };
  }
  next();
});

/*Middleware to allow or not the access to /admin path if skin is logged  */
app.use("/admin", (req, res, next) => {
  if (req.session.auth.isAuth) return next();
  res.redirect("/error");
});

// Import routes of our app
var routesMain = require("./routes/main");
var routesAdmin = require("./routes/api");

// Define routes using URL path
app.use("/", routesMain);
app.use("/api", routesAdmin);

module.exports = app;
