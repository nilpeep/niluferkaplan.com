import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/' >
          <Image className={styles.logo} src="/lillyLogo.png" width={150} height={150}/>
        </Link>
        <div>
            <Links/>
        </div>
    </div>
  )
}

export default Navbar