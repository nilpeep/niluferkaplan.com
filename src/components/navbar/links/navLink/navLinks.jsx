"use client";
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

const Navlinks = ({item, itemKey,children}) => {

const pathName = usePathname()
  return (
    <Link key={itemKey} className={`${styles.container} ${pathName == item.link && styles.active}`} href={item.link}>
      {item.name}
      {children}
      </Link>
  )
}

export default Navlinks