import { Router } from 'express';
import rejesterUser from '../controller/user.controller.js';
import { Upload } from '../middleware/multer.middleware.js';

const router = Router();

router.route('/rejester').post(
  Upload.fields([
    {
      name: 'avatar',
      maxCount: 2,
    },
    {
      name: 'coverImgae',
      maxCount: 2,
    },
  ]),
  rejesterUser
);

export default router;
