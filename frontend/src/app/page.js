"use client"

import BlogCard from "@/components/blogCard/blogCard";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonDark from "@/components/button/buttonDark";
import ButtonLight from "@/components/button/buttonLight";
import { useState } from "react";
import ContactModal from "@/components/contact/page";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}><em>Full-stack Web developer</em></h1>
            <p className={styles.description}>
              I create websites with taste.
              <br></br>
              <br></br> Want to learn more? Check out &#8601;
            </p>
            <div className={styles.buttons}>
              <ButtonDark onClick={openModal} text={"Contact Me "} />
              <ButtonLight text={"Learn More"} />
            </div>
            <div>
              <ContactModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}
