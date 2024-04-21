import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
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
