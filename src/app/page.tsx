"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import { Course } from "@/Types";
import courseData from "@/courseData";
import { v4 } from "uuid";
import { Rating } from "react-simple-star-rating";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <FeaturedCourses courses={courseData} />
      <MoreAboutUs />
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
        src="./home/hero-image.png"
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
      <div className={styles.coursesSlider}>
        <div className={styles.coursesSlide}>
          {courses.concat(courses).map((course, index) => (
            <div className={styles.course} key={v4()}>
              <div className={styles.imageHolder}>
                <img
                  src={course.coverImg}
                  alt={course.title}
                  className={styles.courseImage}
                />
                <span>{course.price.toFixed(2)}$</span>
              </div>
              <div className={styles.courseInfo}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <div className={styles.subInfoHolder}>
                  <h4>
                    <span>Duration: </span> {course.duration.toFixed(1)} Hours
                  </h4>
                  <h4>
                    <span>Enrolled Students: </span>
                    {course.enrolledStudents}
                  </h4>
                </div>
              </div>
              <div className={styles.courseDescription}>
                <p>{course.description}</p>
              </div>
              <div className={styles.courseActions}>
                <button>Buy Now</button>
                <Rating
                  initialValue={course.rating}
                  readonly={true}
                  allowFraction={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Counter({ targetNumber, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [targetNumber, duration]);

  return <h2>{count}</h2>;
}

function MoreAboutUs() {
  const moreAboutUsData = [
    { title: "Learners", number: 450, image: "./home/learners.png" },
    {
      title: "Certifications",
      number: 1200,
      image: "./home/certifications.png",
    },
    { title: "Instructors", number: 34, image: "./home/instructors.png" },
    { title: "Courses", number: 300, image: "./home/courses.png" },
  ];

  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold based on how much of the element should be visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.moreAboutUs} ref={ref}>
      <h1>More About Us</h1>
      <div className={styles.cardsHolder}>
        {moreAboutUsData.map((cardInfo, index) => (
          <div className={styles.card} key={index}>
            <img src={cardInfo.image} alt={cardInfo.title} />
            {startCounting ? (
              <Counter targetNumber={cardInfo.number} duration={2000} />
            ) : (
              <h2>0</h2>
            )}
            <h3>{cardInfo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
