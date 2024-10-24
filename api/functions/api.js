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
const path = require('path'); 
const compression = require('compression');

dotenv.config();

const mongoUri = process.env.MONGO_URI; 
const NODE_ENV = process.env.NODE_ENV || "local";
const PORT = process.env.PORT || 4000;

const app = express();

// Middleware de compression
app.use(compression({
  filter: (req, res) => {
      if (req.headers['x-no-compression']) {
          return false; // Ne pas compresser les requêtes spécifiques
      }
      return compression.filter(req, res); // Compression par défaut
  },
  threshold: 0 // Compression de tous les fichiers
}));
// Middleware pour le CORS
app.use(cors({
  origin: NODE_ENV === "local" ? "http://localhost:5173" : "*",
  credentials: true,
}));

// Autres middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.gz')) {
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Content-Type', 'application/javascript');
    } else if (path.endsWith('.br')) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Vérification de la connexion à MongoDB
if (!mongoUri) {
    throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Database connection error:", err));

  app.get("/api/test-compression", (req, res) => {
    const response = "This is a test for compression. " + "a".repeat(10000);
    res.send(response);
  });
  

// Définir les routes API
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/partners", partnerRouter);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({ success: false, statusCode, message });
});

// Exportation pour Serverless
module.exports.handler = serverless(app);

// Démarrage du serveur
const expressServer = app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});  
