import AsyncFunc from '../utils/asyncHandler.js';

const registerUser = AsyncFunc(async (req, res) => {
  res.status(200).json({
    message: 'omprakash ',
  });
});

export default registerUser;
