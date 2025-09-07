import asycHandaler from '../utils/asycHandaler.js';
import { ApiErrer } from '../utils/ApiErrer.js';
import { User } from '../models/user.modal.js';
import { uplodeOnCloudnary } from '../utils/cloudnary.js';
import { ApiResponse } from '../utils/ApiRespinse.js';

const rejesterUser = asycHandaler(async (req, res) => {
  //taking data from frantent
  const { username, email, password } = req.body;

  // Validate input
  if ([username, email, password].some(field => field?.trim() === '')) {
    throw new ApiErrer(400, 'field is empty');
  }

  //Check wather user is exist or not
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiErrer(409, 'user already exists');
  }

  //taking patha and store in veriable for fils
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImgaeLocalPath = req.files?.coverImgae?.[0]?.path;

  //uplode file after chacking wather is present or not
  if (!avatarLocalPath) {
    throw new ApiErrer(400, 'avatar is required');
  }
  const avatar = await uplodeOnCloudnary(avatarLocalPath);

  //uplode file after chacking wather is present or not
  if (!coverImgaeLocalPath) {
    throw new ApiErrer(400, 'cover image is required');
  }
  const coverImgae = await uplodeOnCloudnary(coverImgaeLocalPath);

  if (!avatar) {
    throw new ApiErrer(400, 'avatar is required');
  }

  // TODO: Hash password before saving

  //uplode in db witch fiel d is creat
  const user = await User.create({
    username,
    avatar: avatar.url,
    coverImgae: coverImgae?.url || ' ',
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  if (!createdUser) {
    throw new ApiErrer(500, 'Something went wrong while registering user');
  }
  console.log('User registration successful');

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, 'user registered successfully'));
});

export default rejesterUser;
