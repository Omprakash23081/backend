import dotenv from 'dotenv';
import Connection from './db/index.js';
// import express from 'express';
import app from './app.js';

dotenv.config({ path: './.env' });

// const app = express();

Connection()
  .then(res => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on ${process.env.PORT || 8000}`);
    });
  })
  .catch(err => {
    console.log(`Error is occurring during database connection: ${err}`);
    console.log('Error in main index.js file');
  });
