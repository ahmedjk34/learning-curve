"use client";
import styles from "../page.module.scss";
import { Course } from "@/Types";
import { v4 } from "uuid";
import { Rating } from "react-simple-star-rating";

export default function FeaturedCourses({ courses }: { courses: Course[] }) {
  return (
    <div className={styles.featuredCourses}>
      <h1>Featured Courses</h1>
      <div className={styles.coursesSlider}>
        <div className={styles.coursesSlide}>
          {courses.concat(courses).map((course) => (
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
