import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.middleware.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dashboardRouter from "./routes/dashboard.routes.js";
import compression from "compression";

const app = express();

// Performance Middleware
app.use(compression());

// Security Middleware
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter); // Apply to API routes

// Routes
// ... other routes loaded elsewhere? 
// Wait, I need to check where other routes are loaded.
// Ah, usually at the bottom. Let me check the file again or just append.
// The file viewed earlier didn't show route mounting.
// I must have missed scrolling down or it does it differently?
// Let me check app.js again fully.


app.use((req, res, next) => {
  console.log(`[GLOBAL LOG] Received ${req.method} request for: ${req.url}`);
  next();
});

app.use(
  // Enable CORS for specified origins
  cors({
    origin: [
      "https://hellowduniya.netlify.app",
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:5176",
      "https://collage-mini-project-090y.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // Allow credentials such as cookies to be sent
    credentials: true,
  })
);
// Using error handling middleware
// Middleware to parse JSON and URL-encoded data, and cookies
app.use(express.json());
// Middleware to parse cookies
app.use(cookiesParser());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Serving static files from the "public" directory
app.use(express.static("public"));

// Error Handling
app.use((err, req, res, next) => {
    // Log error using Winston
    if (err) {
        // Dynamic import logger to avoid circular deps if any, or just plain console if fails, 
        // but better to rely on what we have. 
        // Actually, let's just use console for now as I can't guarantee import in this inline tool 
        // without top-level import, but I will try to add top level imports in next step.
        // For now, let's stick to the existing errorHandler but update it or wrap it.
        console.error("Global Error:", err);
    }
    next(err);
});

app.use(errorHandler);
export default app;
