"use client";
import styles from "./loginCard.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import ButtonDark from "../button/buttonDark";
import Link from "next/link";
// import useAuthCalls from '@/services/useAuthCalls';

// Form doğrulama şeması
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
});

const LoginForm = () => {
  // const handleSubmit = async (values) => {
  //   fetch("https://dummyjson.com/auth/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(values),
  //     // username: "kminchelle",
  //     // password: "0lelplR",
  //     // expiresInMins: 30, // optional, defaults to 60
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  const getData = async (values) => {
    const res = await fetch("http://127.0.0.1:8000/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!res.ok) {
      throw new Error("smt went wrong");
    }

    return res.json();
  };

  const handleSubmit = async (values) => {
    const users = await getData(values);
    console.log(users);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.header}>
              <Image alt="user" src="/user.png" width={50} height={50} />
              <p>Login</p>
            </div>
            <div>
              <Field
                className={styles.input}
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="div"
              />
            </div>
            <div>
              <Field
                className={styles.input}
                type="password"
                name="password"
                placeholder="Şifre"
              />
              <ErrorMessage
                className={styles.error}
                name="password"
                component="div"
              />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor=""> Remember me</label>
            </div>
            <button
              style={{ border: "none", background: "none" }}
              type="submit"
              disabled={isSubmitting}
            >
              <ButtonDark text={"login"} />
            </button>
            <Link href="/register" className={styles.link}>
              I dont have an account
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
