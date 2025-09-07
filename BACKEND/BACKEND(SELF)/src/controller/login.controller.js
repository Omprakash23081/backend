import User from '../model/user.model.js';

const Login = async function (req, res) {
  console.log(req.body);
  const { username, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isMatch = await user.isPasswordCorrect(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'wrong Password' });
  }

  const tokens = user.generateToken();

  res.status(200).json({ message: 'Login successful', ...tokens });
};

export default Login;
