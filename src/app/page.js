import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Backend developer.</h1>
            <p className={styles.description}>
              I am a backend developer with a passion for creating efficient and
              scalable web applications. Want to learn more? Check out
            </p>
            <div className={styles.buttons}>
              <button className={styles.button}>Contact me</button>
              <button className={styles.button}>View blog</button>
              <button className={styles.button}>View resume</button>
              <button className={styles.button}>View portfolio</button>
            </div>
          </div>
          <div className={styles.empty}>

          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/banner1.jpeg" fill={true} />
          </div>
        </div>
        <div className={styles.blogs}>
          <p>lorem10asiodjaslkdjlaskjdla</p>
        </div>
      </div>
    </>
  );
}
