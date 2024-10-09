const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const serverless = require("serverless-http"); 
const userRouter = require("../routes/user.route");
const authRouter = require("../routes/auth.route");
const projectRouter = require("../routes/project.route");
const partnerRouter = require("../routes/partner.route");

dotenv.config();

const mongoUri = process.env.MONGO_URI; 
const NODE_ENV = process.env.NODE_ENV || "production";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: NODE_ENV === "local" ? "http://localhost:5173" : "*",
  credentials: true,
}));


if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not defined');
}


mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection error:", err));


app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/partners", partnerRouter);


app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, statusCode, message });
});


module.exports.handler = serverless(app);


const expressServer = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
