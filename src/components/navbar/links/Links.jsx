"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLinks";

const Links = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
  ];

  const session = true;
  const isAdmin = false;

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
            <button className={styles.logout}>logout</button>
          </>
        ) : (
      
            <NavLink item={{ name: "login", link: "/login" }} />
      
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, i) => (
            <NavLink item={link} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
