import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Image src="/logoGif.gif" width={100} height={100}/>
        </Link>
        <div>
            <Links/>
        </div>
    </div>
  )
}

export default Navbar