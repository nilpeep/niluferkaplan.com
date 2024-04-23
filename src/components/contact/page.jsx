import React from 'react'
import styles from "./contact.module.css"
import ButtonDark from '@/components/button/buttonDark'
import ButtonLight from '@/components/button/buttonLight'

const ContactModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{ zIndex:'9', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onClick={onClose}>
      <div style={{ width: '300px', margin: '100px auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', position: 'relative' }} onClick={e => e.stopPropagation()}>
        {children}
        <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ContactModal
