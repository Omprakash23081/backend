import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression";
import errorHandler from "./middleware/errorHandler.middleware.js";

const app = express();

/* =========================
   TRUST PROXY (Render/Vercel)
========================= */
app.set("trust proxy", 1);

/* =========================
   SECURITY + PERFORMANCE
========================= */
app.use(compression());
app.use(helmet());

/* =========================
   HEALTH CHECK (NO LIMIT)
========================= */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

/* =========================
   GLOBAL LOGGER (NO HEALTH)
========================= */
app.use((req, res, next) => {
  if (req.url !== "/health") {
    console.log(`[GLOBAL LOG] ${req.method} ${req.url}`);
  }
  next();
});

/* =========================
   CORS (Node 22 SAFE)
========================= */
app.use(
  cors({
    origin: [
      "https://studysharp-liart.vercel.app",
      "https://studysharps.netlify.app",
    ],
    credentials: true,
  })
);

/* =========================
   BODY PARSERS
========================= */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

/* =========================
   RATE LIMIT (API ONLY)
========================= */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, try again later",
});

app.use("/api", limiter);

/* =========================
   ERROR PIPELINE
========================= */
app.use((err, req, res, next) => {
  if (err) console.error("Global Error:", err);
  next(err);
});

app.use(errorHandler);

export default app;
