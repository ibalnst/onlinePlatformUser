import express from 'express';
import {
  getCourseByCategory,
  getCourseByRating,
  getCourseByDetail,
  getCourseAllCourse,
  getCourseByHigh,
  getCourseByLow,
  getCourseByFree,
} from '../controllers/courseControllers.js';
import { protect } from '../middleware/auth.js';
import { authUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(authUser, getCourseAllCourse);
router.route('/category').get(protect, authUser, getCourseByCategory);
router.route('/rating').get(protect, authUser, getCourseByRating);
router.route('/detail').get(protect, authUser, getCourseByDetail);
router.route('/search/low').get(getCourseByLow);
router.route('/search/high').get(getCourseByHigh);
router.route('/search/free').get(getCourseByFree);

export default router;
