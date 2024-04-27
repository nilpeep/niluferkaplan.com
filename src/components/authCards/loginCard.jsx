import styles from './loginCard.module.css'
import ButtonDark from '@/components/button/buttonDark'
import ButtonLight from '@/components/button/buttonLight'
import Link from 'next/link'

const LoginCard = () => {
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
      <Link className={styles.link} href='/register'>You dont have an account?</Link>
      </div>
    </form>
  )
}

export default LoginCard