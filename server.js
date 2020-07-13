if (process.env.NODE_ENV === "development") {
	require("dotenv").config({ path: "./config.env" });
}

process.on("uncaughtException", (err) => {
	console.log("UNCAUGHT EXCEPTION! 🔥 Shutting down...");
	console.log(err.name, err.message);
	process.exit(1);
});

const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const AppError = require("./utils/appError");
const submissionRouter = require("./routes/submissions");
const dataRouter = require("./routes/data");
const globalErrorHandler = require("./controllers/errorController");

const publicPath = path.resolve(__dirname, "./public");

// Limit Request From Same IP
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests from this IP!",
});

app.use("/api", limiter);

// Set Security HTTP Headers
app.use(helmet());

console.log(process.env.NODE_ENV);

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

app.use(express.json({ limit: "10kb" }));

// Data Sanitization Against NoSQL Query Injection
app.use(mongoSanitize());

// Data Sanitation Against XXS
app.use(xss());

app.use(cors());

app.use("/api/v1/submit", submissionRouter);
app.use("/api/v1/data", dataRouter);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(publicPath));
	console.log(publicPath);
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "index.html"));
	});
}

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const server = app.listen(port, () =>
	console.log(`Server started on port: ${port}...`)
);

process.on("unhandledRejection", (err) => {
	console.log("UNHANDLED REJECTION! 🔥 Shutting down...");
	console.log(err.name, err.message);
	server.close(() => {
		process.exit(1);
	});
});
