import React from 'react'
import styles from "./contact.module.css"
import ButtonDark from '@/components/button/buttonDark'
import ButtonLight from '@/components/button/buttonLight'
import Image from 'next/image'

const ContactModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{ zIndex:'9', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={onClose}>
      <div style={{ maxWidth: '400px', margin: '100px auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', position: 'relative',padding:'50px' }} onClick={e => e.stopPropagation()}>
        <form className={styles.form}>
          <div className={styles.header}>
          <Image className={styles.img} src='/about.png' alt='nil' width={90} height={90}/>
          <p className={styles.text}>You are reaching<br></br>Nilufer Kaplan</p>
          </div>
          <input type="text" placeholder='Your name' />
          <input type="text" placeholder='Your email' />
          <input type="text" placeholder='Your phone number (optional)' />
          <textarea placeholder='Your message'></textarea>
          <ButtonDark text={'Send'}/>
        </form>
        <Image className={styles.closeButton} src='/close.png' onClick={onClose} width={20} height={20}/>
      </div>
    </div>
  )
}

export default ContactModal
