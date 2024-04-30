'use client'

import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";


import { useEffect,useState } from "react";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on the scroll position
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      // Remove scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
 
  const session = useSelector(state => state.user)

  return (
    <div className={scrolled ? `${styles.container} ${styles.blur}` : `${styles.container}`}>
    
      <Link href="/">
        <Image
          alt="logo"
          className={`${styles.logo}`}
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
