const asyncHandler = fn => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
      next(err);
    });
  };
};
export default asyncHandler;

// Second method to do the same thing
// const asyncHandler2 = fn => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.log(`Error during executing async function: ${error}`);
//   }
// };
