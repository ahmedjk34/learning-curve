import { Schema, Document } from "mongoose";

// Define the review interface
interface Review extends Document {
  author: Schema.Types.ObjectId; // Reference to a User model
  body: string;
  rating: number;
  createdAt: Date;
}

interface Content extends Document {
  title: string;
  contentType: ["Video", "Quiz"];
  contentUrl: string;
  duration: number;
  order: number;
}

// Define the course interface
export interface Course extends Document {
  title: string;
  description: string;
  enrolledStudents: number;
  learningGoals: string[];
  prerequisites: string[];
  rating: number;
  reviews: Review[]; // Array of review objects
  episodes: Content[]; // Array of episode objects
  coverImg: string;
  difficulty: string;
  duration: number; // in hours
  category:
    | "Programming"
    | "Mathematics"
    | "Data Science"
    | "Physics"
    | "Artificial Intelligence";
  price: number;
  discount: number;
  createdAt: Date;
}
