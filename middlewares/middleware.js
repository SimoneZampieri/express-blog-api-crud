const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Endpoint non trovato" });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Si è verificato un errore interno al server" });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
