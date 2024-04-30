'use client'
import styles from './loginCard.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import ButtonDark from '../button/buttonDark';
import Link from 'next/link';

// Form doğrulama şeması
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Unvalid email')
    .required('email is required'),
  password: Yup.string()
    .required('password is required'),
});

const LoginForm = () => (
  <div>
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        
        <Form className={styles.form}>
          <div className={styles.header}>
          <Image src='/user.png' width={50} height={50}/>
          <p >Login</p>
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
            <ButtonDark text={'login'}/>
          </button>
          <Link href='/register' className={styles.link}>I dont have an account</Link>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
