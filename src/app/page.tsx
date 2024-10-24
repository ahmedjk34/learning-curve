import Link from "next/link";
import styles from "./page.module.scss";
import { Course } from "@/Types";
import courseData from "@/courseData";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <FeaturedCourses courses={courseData} />
    </div>
  );
}

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h1>
          Master New Skills at <span>Your Own Pace</span> - Choose from our
          <span> unique collection</span> of courses
        </h1>
        <p>
          Discover a world of learning on <span>Learning Curve</span>, where you
          can explore a <span>wide range of courses</span> designed to help you
          grow. Whether you're <span>advancing your career</span> or{" "}
          <span>pursuing personal passions</span>, our flexible learning paths
          and expert-led resources will guide you to success. Start your{" "}
          <span>learning journey</span> today and{" "}
          <span>achieve your goals</span>, one course at a time.
        </p>

        <div className={styles.heroActionsHolder}>
          <Link href={"/"}>Explore Courses</Link>
          <Link href={"/"}>Start Learning</Link>
        </div>
      </div>
      <img
        src="./hero-image.png"
        alt="hero image"
        className={styles.heroImage}
      />
    </div>
  );
}

function FeaturedCourses({ courses }: { courses: Course[] }) {
  return (
    <div className={styles.featuredCourses}>
      <h1>Featured Courses</h1>
      <div className={styles.coursesHolder}>
        {courses.map((course) => (
          <div className={styles.course}>
            <img
              src={course.coverImg}
              alt={course.title}
              className={styles.courseImage}
            ></img>
            <div className={styles.courseInfo}>
              <div>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <h4>Duration: {course.duration.toFixed(1)} Hours</h4>
              </div>
              <div>
                <h4>Enrolled Students:{course.enrolledStudents}</h4>
                <h4>RATING</h4>
              </div>
            </div>
            <div className={styles.courseDescription}>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
