// Environmental Configuration
if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: "./config.env" });
}

// Initial Error Handling
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 🔥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// Project Environment
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware Packages
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const history = require("connect-history-api-fallback");

// Logic
const AppError = require("./utils/appError");
const submissionRouter = require("./routes/submissions");
const dataRouter = require("./routes/data");
const globalErrorHandler = require("./controllers/errorController");
const publicPath = path.resolve(__dirname, "./public");

// GraphQL Implmentation
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

if (process.env.NODE_ENV === "development") {
  app.use(
    "/graphql",
    graphqlHTTP({
      //directing express-graphql to use this schema to map out the graph
      schema,
      //directing express-graphql to use graphiql when goto '/graphql' address in the browser
      //which provides an interface to make GraphQl queries
      graphiql: true,
    })
  );
}

// Limiter for IP Requests
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP!",
});
app.use("/api", limiter);
app.use(history()); // SPA Application Requirement
app.use(helmet()); // HTTP Security Headers

// Database Establishment
let port = process.env.PORT || 6969;
if (port === null || port === "") port = 6969;
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://riefer02:legacy21@cluster0.gwuet.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((connection) => {
    console.log(`DB connection successful`);
  });
app.use(express.json({ limit: "10kb" })); // Limit Incoming Requests Data
app.use(mongoSanitize()); // Data Sanitization Against NoSQL Query Injection
app.use(xss()); // Data Sanitation Against XXS
app.use(cors()); // Open API Communication

// Routing
app.use("/api/v1/submit", submissionRouter);
app.use("/api/v1/data", dataRouter);

// Initializing Index
if (process.env.NODE_ENV === "production") {
  app.use(express.static(publicPath));
  console.log(publicPath);
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  });
}

// Global Error Handling
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

// Server Uplink
const server = app.listen(port, () =>
  console.log(`Server started on port: ${port}...`)
);

// Logic Error Handling
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 🔥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
