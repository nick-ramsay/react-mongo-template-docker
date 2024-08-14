const tracer = require('dd-trace').init({
  profiling: true,
  env: 'production',
  service: 'react-mongo-template-server',
  ingestion: {
    // Any traces started will be sampled at 1.00% with a rate limit of 100 per second
    sampleRate: 1.0000
  }
});
const express = require("express");
const mongoose = require('mongoose');

require("dotenv").config();

const keys = require('./keys');

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

tracer.use('express', {
  hooks: {
    request: (span, req, res) => {
      span.setTag('ownership.team', 'nicks_test_team')
    }
  }
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting headers for CORS Policies
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Timing-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials, x-datadog-origin, x-datadog-sampling-priority, x-datadog-parent-id, x-datadog-trace-id, Timing-Allow-Origin, traceparent");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// Add routes, both API and view 
app.use(routes);

// Connect to the Mongo DB

const connection = (process.env.NODE_ENV === "production" ? keys.mongodb.mongo_uri : keys.mongodb.mongo_uri);

console.log(process.env.NODE_ENV);
console.log(process.env.MONGO_URI);
console.log(connection);

if (process.env.NODE_ENV === "production") {
  mongoose.connect(connection, {})
    .then(() => console.log("🌐💽 ==> Atlas Database Connected Successfully"))
    .catch(err => console.log(err));
} else {
  mongoose.connect(process.env.mongo_uri || keys.mongodb.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("💽 ==> Local Database Connected Successfully"))
    .catch(err => console.log(err));
}

//Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});