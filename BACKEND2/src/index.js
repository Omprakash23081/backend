// require('dotenv').config({ path: './.env' });//it will work properly but problam is we are first taking require and after that import
// so we need to use import for dotenv
import dotenv from 'dotenv';
import Connection from './db/index.js';

dotenv.config({ path: './.env' });

Connection();
