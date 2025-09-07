import app from './app.js';
import dotenv from 'dotenv';
import connection from './db/user.js';
dotenv.config({ path: './.env' });

connection()
  .then(res => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port number ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  });
