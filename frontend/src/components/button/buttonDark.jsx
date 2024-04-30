import React from 'react'
import styles from './button.module.css'

const ButtonDark = ({text,onClick}) => {
  return (
    <div onClick={onClick} className={styles.dark}>{text}</div>
  )
}

export default ButtonDark