'use client'

import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";


const Navbar = () => {
  const session = useSelector(state => state.user)
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          alt="logo"
          className={styles.logo}
          src="/lillyLogo.png"
          width={100}
          height={100}
        />
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
