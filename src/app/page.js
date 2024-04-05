import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Software developer.</h1>
            <p className={styles.description}>
              Software developer with a passion for creating efficient and
              scalable web applications.<br></br> im currently specializing on
              MERN-stack.<br></br>
              <br></br> Want to learn more? Check out
            </p>
            <div className={styles.buttons}>
              <button className={styles.button}>Contact me</button>
              <button className={styles.button}>Learn more</button>
            </div>
            <div className={styles.icons}>
            <Link target="blank" href={'https://github.com/nilpeep'}>
            <Image src="/social.png" width={50} height={50} />
            
            </Link>
            <Link target="blank" href={'https://medium.com/@niluferk038'}>
            <Image src="/medium.png" width={50} height={50} />
            
            </Link>
            <Link target="blank" href={'https://www.linkedin.com/in/nilufer-kaplan/'}>
            <Image src="/linkedin.png" width={50} height={50} />
            
            </Link>
            <Link target="blank" href={'https://stackoverflow.com/users/23589727/nilufer-kaplan'}>
            <Image src="/stack-overflow.png" width={50} height={50} />
            
            </Link>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/blueBanner.jpeg" fill={true} />
          </div>
        </div>
        <div className={styles.blogs}>
          <p>lorem10asiodjaslkdjlaskjdla</p>
        </div>
      </div>
    </>
  );
}
