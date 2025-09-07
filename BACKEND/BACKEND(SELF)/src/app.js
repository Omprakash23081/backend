import express from 'express';
import cors from 'cors';
import cookiParsor from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
const App = express();
App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json({ limit: '23kb' }));
App.use(cookiParsor());
App.use(express.static('public'));

import rout from './routes/user.routes.js';

App.use('/users', rout);
export default App;
