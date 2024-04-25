"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLinks";
import Image from "next/image";

import { Provider } from "react-redux";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "@/store";
import { setUser } from "@/store/user";

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

  const session = false;
  const isAdmin = false;

  const user = useSelector((state) => state.user.userData);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>

        <Image
          src="/menu.svg"
          width={30}
          height={30}
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        />

        <div className={`${styles.mobileLinks} ${open ? styles.open : ""}`}>
          {links.map((link, i) => (
            <NavLink item={link} key={i} />
          ))}
        </div>

        {/* <button onClick={() => store.dispatch(setUser('nilufer'))}>login test</button>
      <button onClick={() => store.dispatch(setUser(null))}>logout test</button>
      <div>username :{user}</div>  */}
      </div>
      {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
          <button className={styles.logout}>logout</button>
        </>
      ) : (
        <button className={`${styles.loginButton} ${styles.links}`}>
          <Image src="/user.png" width={30} height={30} />
          login
        </button>
      )}
    </>
  );
};

export default Links;
