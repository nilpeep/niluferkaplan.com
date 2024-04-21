import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userPhoto}>
            <Image src="/about.png" fill />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              Nilufer Kaplan <span className={styles.userRole}>• Owner</span>
            </div>
            <div className={styles.userDetails}>Backend Developer</div>
            <div className={styles.postTime}>5 hours ago • </div>
          </div>
        </div>
        <div className={styles.postSection}>
        <div className={styles.postText}>
        This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. 💼
        </div>
        <div className={styles.readMore}>
          Read More
        </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
