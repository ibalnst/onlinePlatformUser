import mongoose from 'mongoose';
import softDelete from 'mongoose-soft-delete';

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    free: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

courseSchema.plugin(softDelete);
const Course = mongoose.model('Course', courseSchema);
export default Course;
