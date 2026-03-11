import logger from "../utils/logger.js";

export default function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    // Log operational errors as info or warn
    logger.warn(`API Error: ${err.message}`, { statusCode: err.statusCode, path: req.path });
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Log unhandled errors as error
  logger.error(`Unhandled Error: ${err.message}`, { stack: err.stack, path: req.path });
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}
