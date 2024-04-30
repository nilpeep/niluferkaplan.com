'use client'
import styles from './loginCard.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import ButtonDark from '../button/buttonDark';
import Link from 'next/link';

// Form doğrulama şeması
const LoginSchema = Yup.object().shape({
  username: Yup.string()
  .required('username required'),
  email: Yup.string()
    .email('unvalid email address')
    .required('email is required'),
  password: Yup.string()
  .min(6, 'at least 6 characters')
  .required('password is required'),
});

const LoginForm = () => (
  <div>
    
    <Formik
      initialValues={{firstname:'',lastname:'',username:'', email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        
        <Form className={styles.form}>
          <div className={styles.header}>
          <Image src='/user.png' width={50} height={50}/>
          <p >Register</p>
          </div>
          <div>
          <Field className={styles.input} type="username" name="username" placeholder="User name" />
          <ErrorMessage className={styles.error} name="username" component="div" />
          </div>
          <div>
          <Field className={styles.input} type="email" name="email" placeholder="Email" />
          <ErrorMessage className={styles.error} name="email" component="div" />
          </div>
          <div>
          <Field className={styles.input} type="password" name="password" placeholder="Şifre" />
          <ErrorMessage className={styles.error} name="password" component="div" />
          </div>
          <div >
          <input type='checkbox' />
          <label htmlFor=""> Remember me</label>
          </div>
          <button style={{border:'none', background:'none'}} type="submit" disabled={isSubmitting}>
            <ButtonDark text={'register'}/>
          </button>
          <Link href='/login' className={styles.link}>I already have an account</Link>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
