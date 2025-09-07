import { Router } from 'express';
import rejestr from '../controller/user.controller.js';
const rout = Router();
rout.route('/rejester').post(rejestr);
export default rout;
