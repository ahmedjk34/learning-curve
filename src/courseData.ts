import { Course } from "./Types";

const tempCourses: Course[] = [
  {
    title: "Introduction to Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript in this beginner-level course.",
    enrolledStudents: 120,
    learningGoals: [
      "Understand the structure of a webpage using HTML.",
      "Style web pages using CSS.",
      "Implement interactivity with JavaScript.",
    ],
    rating: 5,
    prerequisites: ["Basic computer skills"],
    reviews: [
      {
        author: "User1",
        body: "Great course for beginners!",
        rating: 4.5,
        createdAt: new Date("2023-05-14"),
      },
    ],
    episodes: [
      {
        title: "Introduction to HTML",
        contentType: "Video",
        contentUrl: "https://example.com/html",
        duration: 20,
        order: 1,
      },
      {
        title: "CSS Fundamentals",
        contentType: "Video",
        contentUrl: "https://example.com/css",
        duration: 30,
        order: 2,
      },
      {
        title: "JavaScript Basics",
        contentType: "Video",
        contentUrl: "https://example.com/js",
        duration: 45,
        order: 3,
      },
    ],
    coverImg: "https://example.com/img/webdev.jpg",
    difficulty: "Beginner",
    duration: 95 / 60, // Total duration in hours
    category: "Programming",
    price: 49.99,
    discount: 10,
    createdAt: new Date(),
  },
  {
    title: "Data Science with Python",
    description:
      "A comprehensive course covering data science techniques and tools using Python.",
    enrolledStudents: 85,
    learningGoals: [
      "Understand Python for data analysis.",
      "Learn to work with pandas and NumPy.",
      "Apply machine learning techniques with scikit-learn.",
    ],
    prerequisites: ["Basic Python knowledge"],
    rating: 3.5,

    reviews: [
      {
        author: "User2",
        body: "Loved the hands-on approach in this course!",
        rating: 4.8,
        createdAt: new Date("2024-01-20"),
      },
    ],
    episodes: [
      {
        title: "Data Analysis with Pandas",
        contentType: "Video",
        contentUrl: "https://example.com/pandas",
        duration: 50,
        order: 1,
      },
      {
        title: "Data Visualization with Matplotlib",
        contentType: "Video",
        contentUrl: "https://example.com/matplotlib",
        duration: 40,
        order: 2,
      },
      {
        title: "Machine Learning Basics",
        contentType: "Video",
        contentUrl: "https://example.com/ml",
        duration: 60,
        order: 3,
      },
    ],
    coverImg: "https://example.com/img/datascience.jpg",
    difficulty: "Intermediate",
    duration: 150 / 60, // Total duration in hours
    category: "Data Science",
    price: 99.99,
    discount: 15,
    createdAt: new Date(),
  },
  {
    title: "Advanced Algorithms in C++",
    description:
      "Master complex algorithms and data structures using C++ in this advanced course.",
    enrolledStudents: 40,
    learningGoals: [
      "Implement advanced algorithms in C++.",
      "Understand data structures like trees, graphs, and heaps.",
      "Solve complex algorithmic problems.",
    ],
    prerequisites: ["Intermediate knowledge of C++"],
    rating: 4.2,
    reviews: [
      {
        author: "User3",
        body: "Challenging but rewarding!",
        rating: 4.2,
        createdAt: new Date("2023-09-05"),
      },
    ],
    episodes: [
      {
        title: "Dynamic Programming",
        contentType: "Video",
        contentUrl: "https://example.com/dp",
        duration: 70,
        order: 1,
      },
      {
        title: "Graph Algorithms",
        contentType: "Video",
        contentUrl: "https://example.com/graph",
        duration: 60,
        order: 2,
      },
      {
        title: "Advanced Data Structures",
        contentType: "Video",
        contentUrl: "https://example.com/ds",
        duration: 80,
        order: 3,
      },
    ],
    coverImg: "https://example.com/img/cpp.jpg",
    difficulty: "Advanced",
    duration: 210 / 60, // Total duration in hours
    category: "Programming",
    price: 129.99,
    discount: 20,
    createdAt: new Date(),
  },
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Explore the fundamentals of AI, including machine learning, neural networks, and AI ethics.",
    enrolledStudents: 70,
    learningGoals: [
      "Understand the basics of AI.",
      "Implement simple machine learning algorithms.",
      "Explore neural networks and deep learning.",
    ],
    prerequisites: ["Basic programming knowledge"],
    rating: 3.7,
    reviews: [
      {
        author: "User4",
        body: "Great introduction to AI!",
        rating: 4.7,
        createdAt: new Date("2024-02-15"),
      },
    ],
    episodes: [
      {
        title: "Introduction to AI",
        contentType: "Video",
        contentUrl: "https://example.com/ai",
        duration: 30,
        order: 1,
      },
      {
        title: "Machine Learning Basics",
        contentType: "Video",
        contentUrl: "https://example.com/ml",
        duration: 50,
        order: 2,
      },
      {
        title: "Neural Networks",
        contentType: "Video",
        contentUrl: "https://example.com/nn",
        duration: 45,
        order: 3,
      },
    ],
    coverImg: "https://example.com/img/ai.jpg",
    difficulty: "Beginner",
    duration: 125 / 60, // Total duration in hours
    category: "Artificial Intelligence",
    price: 89.99,
    discount: 5,
    createdAt: new Date(),
  },
];

module.exports = tempCourses;
