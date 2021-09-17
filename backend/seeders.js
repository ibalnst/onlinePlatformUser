import mongoose from 'mongoose';
import dotenv from 'dotenv';
import color from 'colors';
import users from './data/user.js';
import User from './models/userModal.js';
import Course from './models/courseModels.js';
import course from './data/course.js';

dotenv.config();

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`API running on port ${process.env.PORT}`.yellow.bold);
  } catch (error) {
    console.log(`${error} API not running`.red.bold);
  }
};

conn();

const importData = async () => {
  try {
    // await User.deleteMany();
    await Course.deleteMany();
    // const createdUsers = await User.insertMany(users);
    await Course.insertMany(course);
    // const adminUser = createdUsers[0]._id;
    console.log('Data Imported'.green.inverse);
    process.exit(1);
  } catch (error) {
    console.log(`${error.message}`.red.bold);
  }
};

const destroyData = async () => {
  try {
    // await User.deleteMany();
    await Course.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error.message}`.red.bold);
  }
};

if (process.argv[2] === '-d' ? destroyData() : importData());
