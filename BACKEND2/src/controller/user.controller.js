import asycHandaler from '../utils/asycHandaler.js';

const rejesterUser = asycHandaler(async (req, res) => {
  res.status(200).json({
    message: 'Hi Omprakash Kumar',
  });
});

export default rejesterUser;
