const asycHandaler = requestHandelar => {
  (req, res, next) => {
    Promise.resolve(requestHandelar(req, res, next)).catch(err => {
      next(err);
    });
  };
};

export default asycHandaler;
// This function takes a request handler function as an argument and returns a new function that handles the request.
