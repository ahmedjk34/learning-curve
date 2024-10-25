import Link from "next/link";
import styles from "../page.module.scss";

export default function Hero() {
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
