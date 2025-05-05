// require('dotenv').config({ path: './.env' });//it will work properly but problam is we are first taking require and after that import
// so we need to use import for dotenv
import dotenv from 'dotenv';
import Connection from './db/index.js';

dotenv.config({ path: './.env' });

Connection()
  .than(res => {
    console.log(res);
    app.lisition(process.env.PORT || 8000, () => {
      console.log(`Server is listing on ${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Errer is accuring during data base connaction ${err}`);
  });
