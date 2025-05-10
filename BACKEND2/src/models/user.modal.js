import mongooes from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password id Required'], //hear we can pass costom massage like password is required
      unique: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudnary url
      required: true,
      unique: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export const userModel = mongoose.model('User', userSchema);
