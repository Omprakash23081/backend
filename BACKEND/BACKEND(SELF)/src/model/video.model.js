import mongoose, { Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2 ';
const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String, //cloudnary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudnary url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    },
    isPublish: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongoosePaginate);

export const Video = mongoose.model('Video', videoSchema);
