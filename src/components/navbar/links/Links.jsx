"use client"
import { useState } from 'react';
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

  const handleOverlayClick = () => {
    if (open) {
      setOpen(false); // Menüyü sadece açık ise kapat
    }
  };

  const toggleMenu = (event) => {
    event.stopPropagation(); // Bu tıklama olayının üst elementlere yayılmasını durdur
    setOpen(prev => !prev);
  };

  return (
    <div onClick={handleOverlayClick} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.links}>
        {links.map((link, i) => (
          <NavLink item={link} key={i} />
        ))}
      </div>
      <div className={open ? styles.mobileOverlay : ''}>
      <div className={`${styles.menuContainer} ${open ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
        <Image
          src="/menu.svg"
          width={30}
          height={30}
          className={styles.menuButton}
          onClick={toggleMenu}
        />
        <div className={`${styles.mobileLinks} ${open ? styles.open : ''}`}>
          {links.map((link, i) => (
            <NavLink item={link} key={i} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Links;
