"use client";
import styles from "./loginCard.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import ButtonDark from "../button/buttonDark";
import Link from "next/link";
import useAuthCalls from "@/services/useAuthCalls";

// Form doğrulama şeması
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
  rememberMe: Yup.boolean(),
});

const LoginForm = () => {
  const { login } = useAuthCalls();

  const handleSubmit = async (values) => {
    console.log(values);
    const user = await login(values);
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
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
              <label htmlFor="">
                <Field type="checkbox" name="rememberMe"></Field>
                Remember me
              </label>
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
