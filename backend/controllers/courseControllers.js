import asyncHandler from 'express-async-handler';
import Course from '../models/courseModels.js';

const getCourseByCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;
  const course = await Course.find(category).populate('category');
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Category not found' });
    throw new Error('Category not found');
  }
});
const getCourseByRating = asyncHandler(async (req, res) => {
  const { rating } = req.body;
  const course = await Course.find(rating).populate('rating');
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Rating not found' });
    throw new Error('Rating not found');
  }
});
const getCourseByDetail = asyncHandler(async (req, res) => {
  const { detail } = req.body;
  const course = await Course.find(detail).populate('detail');
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Detail not found' });
    throw new Error('Detail not found');
  }
});
const getCourseAllCourse = asyncHandler(async (req, res) => {
  const course = await Course.find({});
  res.json(course);
});
const getCourseByHigh = asyncHandler(async (req, res) => {
  const course = await Course.find({}).sort({ price: -1 });
  res.json(course);
});
const getCourseByLow = asyncHandler(async (req, res) => {
  const course = await Course.find({}).sort({ price: +1 });
  res.json(course);
});
const getCourseByFree = asyncHandler(async (req, res) => {
  const { free } = req.body;
  const course = await Course.find(free).populate('free');
  if (course) {
    res.json(course);
  }
});

export {
  getCourseByCategory,
  getCourseByRating,
  getCourseByDetail,
  getCourseAllCourse,
  getCourseByHigh,
  getCourseByLow,
  getCourseByFree,
};
