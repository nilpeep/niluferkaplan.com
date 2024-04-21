import React from 'react'
import styles from './button.module.css'

const ButtonLight = ({text}) => {
  return (
    <div className={styles.light}>{text}</div>
  )
}

export default ButtonLight