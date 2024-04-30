"use client"

import styles from "./loginCard.module.css";
import ButtonDark from "@/components/button/buttonDark";
import ButtonLight from "@/components/button/buttonLight";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçersiz email adresi')
    .required('Email adresi gereklidir'),
  password: Yup.string()
    .min(2, 'Şifre çok kısa!')
    .max(50, 'Şifre çok uzun!')
    .required('Şifre gereklidir'),
});

const LoginCard = () => {
  return (

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
    <Form className={styles.form}>
    <p className={styles.header}>Login</p>
    <div className={styles.inputContainer}>
      <label htmlFor="email">Email</label>
      <input
        className={styles.input}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
    </div>
    <div className={styles.inputContainer}>
      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
     
      />
      <p className={styles.link}>Forget my password</p>
    </div>
    {/* <ButtonDark type={submit} disabled={isSubmitting} text={"login"} /> */}
    <div className={styles.actions}>
      <p>or</p>
      <Link className={styles.link} href="/register">
        You dont have an account?
      </Link>
    </div>
  </Form>
  </Formik>
    // <div>
    //   <h1>Anywhere in your app!</h1>
    //   <Formik
    //     initialValues={{ email: "", password: "" }}
    //     validate={(values) => {
    //       const errors = {};
    //       if (!values.email) {
    //         errors.email = "Required";
    //       } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //       ) {
    //         errors.email = "Invalid email address";
    //       }
    //       return errors;
    //     }}
    //     onSubmit={(values, { setSubmitting }) => {
    //       setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         setSubmitting(false);
    //       }, 400);
    //     }}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       isSubmitting,
    //       /* and other goodies */
    //     }) => (
    //       <form onSubmit={handleSubmit} className={styles.form}>
    //         <p className={styles.header}>Login</p>
    //         <div className={styles.inputContainer}>
    //           <label htmlFor="email">Email</label>
    //           <input
    //             className={styles.input}
    //             type="email"
    //             name="email"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.email}
    //             id="email"
    //             placeholder="Email"
    //           />
    //         </div>
    //         <div className={styles.inputContainer}>
    //           <label htmlFor="password">Password</label>
    //           <input
    //             className={styles.input}
    //             id="password"
    //             name="password"
    //             type="password"
    //             placeholder="Password"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.password}
    //           />
    //           <p className={styles.link}>Forget my password</p>
    //         </div>
    //         {/* <ButtonDark type={submit} disabled={isSubmitting} text={"login"} /> */}
    //         <div className={styles.actions}>
    //           <p>or</p>
    //           <Link className={styles.link} href="/register">
    //             You dont have an account?
    //           </Link>
    //         </div>
    //       </form>
    //     )}
    //   </Formik>
    // </div>
  );
};

export default LoginCard;
