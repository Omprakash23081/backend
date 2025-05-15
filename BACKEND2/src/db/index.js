import mongoose from 'mongoose';
import { DBName } from '../constant.js';

const Connection = async () => {
  try {
    const ConnactionInstants = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DBName}`
    );
    console.log('MongoDB connected successfully');
    console.log(`MongoDB connected:${ConnactionInstants.connection.host}`);
  } catch (error) {
    console.log('errer in db folder ');
    // console.error('Error connecting to MongoDB:', error);
  }
};

export default Connection;
