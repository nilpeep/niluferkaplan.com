"use client";
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

const Navlinks = ({item}) => {

const pathName = usePathname()
  return (
    <Link className={`${styles.container} ${pathName == item.link && styles.active}`} href={item.link}>
      {item.name}
      </Link>
  )
}

export default Navlinks