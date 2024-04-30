"use client";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink/navLinks";
import styles from "./links.module.css";
import { useSelector } from "react-redux";

const Links = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
    { name: "Portfolio", link: "/portfolio" },
  ];

  const [open, setOpen] = useState(false);

  const handleOverlayClick = () => {
    if (open) {
      setOpen(false); // Menüyü sadece açık ise kapat
    }
  };

  const toggleMenu = (event) => {
    event.stopPropagation(); // Bu tıklama olayının üst elementlere yayılmasını durdur
    setOpen((prev) => !prev);
  };

  const user = useSelector(state => state.user.data)

  // const user = {
  //   username:'nilufer',
  //   profilePicture: '/about.png'
  // }

  return (
    <div onClick={handleOverlayClick} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.links}>
        {links.map((link, i) => (
          <NavLink key={i} item={link} itemKey={i} />
        ))}
        <div className={styles.loginContainer}>
        <NavLink item={{name:'',link:'/login'}} itemKey={6} >
          <Image src={user.profilePicture || '/user.png'} style={{borderRadius:'50%'}} width={user.profilePicture ? 60 : 30} height={user.profilePicture ? 60 : 30} />
        </NavLink>
        </div>
      </div>
        <Image
          alt="menu"
          src="/menu.svg"
          width={30}
          height={30}
          className={`${styles.menuButton} ${open ? styles.open : ""}`}
          onClick={toggleMenu}
        />
      <div className={open ? styles.mobileOverlay : ""}>
        <div
          className={`${styles.menuContainer} ${open ? styles.open : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${styles.mobileLinks} ${open ? styles.open : ""}`}>
            <div
              className={styles.menuLoginContainer}
            >
              <Image src="/user.png" width={30} height={30} />
              <p>{user.username || 'Login'}</p><span> &darr;</span>
            </div>
            {links.map((link, i) => (
              <NavLink key={i} item={link} itemKey={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
