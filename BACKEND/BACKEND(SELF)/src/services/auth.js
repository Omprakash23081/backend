import { User } from '../model/user.model';
import jwt from 'jsonwebtoken';

const Tokens = (User.methods.generateToken = function () {
  const payload = {
    _id: User._id,
    email: User.email,
  };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '7d',
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  });
  User.refreshToken = refreshToken;
  User.save();
  return { accessToken, refreshToken };
});

export default Tokens;
