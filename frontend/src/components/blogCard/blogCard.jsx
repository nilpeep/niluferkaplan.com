"use client";

import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["/banner.png", "/banner1.jpeg", "/yellowBanner.jpeg"];

const BlogCard = ({ text, maxLength = 70 }) => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userPhoto}>
            <Image alt="me" src="/about.png" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
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
            {text.length <= maxLength ? (
              text
            ) : (
              <div>
                <p>
                  {showFullText ? text : text.substring(0, maxLength)}
                  <span
                    className={styles.readMore}
                    onClick={() => setShowFullText(!showFullText)}
                  >
                    {showFullText ? "View all document" : " ...see more"}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* {
          showFullText ? <Image src='/resumeExample.webp' width={200} height={300}/> : ''
        } */}

        <div className={styles.imgContainer}>
        <Image alt="resume" className={styles.img} src='/resumeExample.webp' fill />
        </div>
     
       
      </div>
    </>
  );
};

export default BlogCard;
