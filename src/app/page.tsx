import Link from "next/link";
import styles from "./page.module.scss";
import { Course } from "@/Types";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <FeaturedCourses />
    </div>
  );
}

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h1>
          Master New Skills at Your Own Pace - Choose from our unique collection
          of courses
        </h1>
        <p>
          Discover a world of learning on Learning Curve, where you can explore
          a wide range of courses designed to help you grow. Whether you're
          advancing your career or pursuing personal passions, our flexible
          learning paths and expert-led resources will guide you to success.
          Start your learning journey today and achieve your goals, one course
          at a time.
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

function FeaturedCourses(courses: { courses: Course }) {
  return <div></div>;
}
