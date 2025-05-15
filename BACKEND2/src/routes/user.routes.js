import { Router } from 'express';
import rejesterUser from '../controller/user.controller.js';

const router = Router();

router.route('/rejester').post(rejesterUser);

export default router;
