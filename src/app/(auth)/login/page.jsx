import React from 'react'
import styles from './login.module.css'
import ButtonDark from '@/components/button/buttonDark'
import ButtonLight from '@/components/button/buttonLight'

const LoginPage = () => {
  return (
    <form className={styles.form}>
      <p className={styles.header}>Login</p>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input className={styles.input} id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">Password</label>
        <input className={styles.input} id="password" name="password" type="password" placeholder='Password' />
      <p className={styles.link}>Forget my password</p>
      </div>
      <ButtonDark text={'login'}/>
      <div className={styles.actions}>
      <p>or</p>
      <p className={styles.link}>You dont have an account?</p>
      </div>
    </form>
  )
}

export default LoginPage