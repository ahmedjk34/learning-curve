"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../page.module.scss";

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

export default function MoreAboutUs() {
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
      { threshold: 0.5 }
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
