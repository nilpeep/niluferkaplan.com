import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>© 2022 Nilufer Kaplan. All rights reserved.</p>
      </div>
      <div className={styles.icons}>
        <Link target="blank" href={"https://github.com/nilpeep"}>
          <Image alt="github-icon" src="/social.png" width={30} height={30} />
        </Link>
        <Link target="blank" href={"https://medium.com/@niluferk038"}>
          <Image alt="medium-icon" src="/medium.png" width={30} height={30} />
        </Link>
        <Link
          target="blank"
          href={"https://www.linkedin.com/in/nilufer-kaplan/"}
        >
          <Image alt="linkedin-icon" src="/linkedin.png" width={30} height={30} />
        </Link>
        <Link
          target="blank"
          href={"https://stackoverflow.com/users/23589727/nilufer-kaplan"}
        >
          <Image alt="stack-overflow-icon" src="/stack-overflow.png" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
