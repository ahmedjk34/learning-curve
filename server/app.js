const cookieParser = require("cookie-parser");
const express = require("express");
const httpErrors = require("http-errors");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./routes/routes");
require("dotenv").config();
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

const app = express();

const cors = require("cors");
app.use(cors());
// For parsing application/json:
app.use(require("body-parser").json());

// For parsing application/x-www-form-urlencoded
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
