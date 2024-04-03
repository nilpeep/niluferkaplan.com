import styles from "./home.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Backend developer</h1>
          <p>
            I am a backend developer with a passion for creating efficient and
            scalable web applications. I have experience with Node.js,
            Express.js, and MongoDB. I am also proficient with React.js and
            Next.js. I am a quick learner and collaborate closely with clients
            to create efficient, scalable, and user-friendly solutions.
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>Contact me</button>
            <button className={styles.button}>View blog</button>
            <button className={styles.button}>View resume</button>
            <button className={styles.button}>View portfolio</button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/banner.jpg" width={800} height={550}/>
        </div>
      </div>
    </>
  );
}
