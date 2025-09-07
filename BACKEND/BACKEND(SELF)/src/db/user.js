import mongoose from 'mongoose';
import { DBName } from '../constant.js';

const connection = async () => {
  try {
    const connectref = await mongoose.connect(
      `${process.env.DB_URL}/${DBName}`
    );
    console.log('Data conected sucessfully !');
    console.log(connectref.connection.host);
  } catch (error) {
    console.log('errer during connicting with data base' + error);
  }
};
export default connection;
