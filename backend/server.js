import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import color from 'colors';
import courseRouter from './routes/courseRouter.js';
import userRouter from './routes/userRouter.js';
import Course from './models/courseModels.js';
import User from './models/userModal.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/course', courseRouter);
app.use('/api/users', userRouter);
app.get('/api/totalData', (req, res) => {
  Course.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error('Error: ', err));
});
app.get('/api/freeCourse', (req, res) => {
  Course.find({ price: 0 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error('Error: ', err));
});
app.get('/api/totalUser', (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error('Error: ', err));
});

app.get('/', (req, res) => {
  res.send('API USER RUNNING');
});
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`API running on port ${PORT}`.yellow.bold)
    )
  )
  .catch((err) => console.log(`${err} API not running`.red.bold));
