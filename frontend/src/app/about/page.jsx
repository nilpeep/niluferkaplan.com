import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image alt='nilufer' className={styles.img} src="/about.png" fill/>
      </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>
      Hi there, It&apos;s Nilufer. You can call me Nil.
      </h1>
      <p>
        
      </p>
      <p>
         
      </p>
      </div>
    </div>
  )
}

export default AboutPage
