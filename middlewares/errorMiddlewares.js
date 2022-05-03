const errorsHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    ...err,
    message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

module.exports = { errorsHandler };
