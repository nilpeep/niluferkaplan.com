import BlogCard from "@/components/blogCard/blogCard";
import React from "react";
import styles from "./blog.module.css"

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
      <BlogCard
        text={
          "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
        }
      />
      </div>
      <div className={styles.post}>
      <BlogCard
        text={
          "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
        }
      />
      </div>
      <div className={styles.post}>
      <BlogCard
        text={
          "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
        }
      />
      </div>
      <div className={styles.post}>
      <BlogCard
        text={
          "This Resume helped many in getting an interview calls from companies like Google, Microsoft, Amazon, and many more. "
        }
      />
      </div>
      
    </div>
  );
};

export default BlogPage;
