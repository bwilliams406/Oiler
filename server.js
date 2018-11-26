const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const passport = require("passport");

require("./server/userRoutes")
require("./server/userModel");
require("./server/config/passport");
const routes = require("./server/routes");

const app = express();
const mongoDB = process.env.MONGODB;

mongoose.connect(process.env.MONGODB || "mongodb://localhost/User");
mongoose.connection.on("error", err => {
  console.error(err.message);
});


app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/", routes);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
