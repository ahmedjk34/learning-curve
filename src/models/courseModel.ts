import { Course } from "@/Types";
import mongoose from "mongoose";

const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const contentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    enum: ["Video", "Quiz"],
    required: true,
  },
  contentUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

const courseCategories = [
  "Programming",
  "Mathematics",
  "Data Science",
  "Physics",
  "Artificial Intelligence",
];

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  enrolledStudents: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  learningGoals: {
    type: [String],
    required: true,
  },
  prerequisites: {
    type: [String],
    required: false,
  },
  reviews: [reviewSchema],
  episodes: [contentSchema],
  coverImg: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in hours
    required: true,
  },
  category: {
    type: String,
    enum: courseCategories,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

courseSchema.pre("save", function (next: any) {
  const course: Course = this as Course;

  // Calculate total duration
  if (course.episodes && course.episodes.length > 0) {
    const totalDurationInMinutes = course.episodes.reduce((total, episode) => {
      return total + episode.duration;
    }, 0);

    course.duration = totalDurationInMinutes / 60; // Convert minutes to hours
  }

  // Calculate average rating
  if (course.reviews && course.reviews.length > 0) {
    const totalRating = course.reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0);

    course.rating = totalRating / course.reviews.length;
  }

  next();
});

module.exports = model("Course", courseSchema);

const courseModel =
  mongoose.models.Course || mongoose.model<Course>("Course", courseSchema);
export default courseModel;
