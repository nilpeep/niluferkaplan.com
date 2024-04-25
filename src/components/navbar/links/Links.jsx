"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './navLink/navLinks';
import styles from './links.module.css';

const Links = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' },
    { name: 'Portfolio', link: '/portfolio' },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Dış tıklamaları dinlemek için bir fonksiyon
    const handleOutsideClick = (event) => {
      // Menü dışında bir yere tıklandığında menüyü kapat
      if (open && !event.target.closest(`.${styles.menuContainer}`)) {
        setOpen(false);
      }
    };

    // Etkinlik dinleyicisini belgeye ekle
    document.addEventListener('click', handleOutsideClick);

    // Temizleme fonksiyonu
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]); // Bağımlılıkları açık state'ine bağla

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLink item={link} key={i} />
        ))}
      </div>
      <div className={`${styles.menuContainer} ${open ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
        <Image
          src="/menu.svg"
          width={30}
          height={30}
          className={styles.menuButton}
          onClick={() => setOpen(prev => !prev)}
        />
        <div className={`${styles.mobileLinks} ${open ? styles.open : ''}`}>
          {links.map((link, i) => (
            <NavLink item={link} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;
