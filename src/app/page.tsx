"use client";
import styles from "./page.module.scss";
import Hero from "@/app/_homeComponents/Hero";
import FeaturedCourses from "@/app/_homeComponents/FeaturedCourses";
import MoreAboutUs from "@/app/_homeComponents/MoreAboutUs";
import courseData from "@/courseData";
import { Rating } from "react-simple-star-rating";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <FeaturedCourses courses={courseData} />
      <MoreAboutUs />
      <Rating />
    </div>
  );
}
