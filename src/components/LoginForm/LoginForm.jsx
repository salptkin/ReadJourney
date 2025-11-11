import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { loginValidation } from "../../utils/schemas/authValidation";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authOperations";

import toast from "react-hot-toast";
import Button from "../GeneralUse/Button/Button";
import InputField from "../GeneralUse/InputField/InputField";
import AuthErrorMessage from "../AuthError/AuthError";
import IconValidation from "../GeneralUse/IconValidation/IconValidation";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidation}
      onSubmit={async ({ email, password }, { resetForm }) => {
        if (!email.trim() || !password.trim()) return;

        try {
          await dispatch(login({ email, password })).unwrap();
          resetForm();
        } catch (error) {
          const msg =
            (typeof error === "string" && error) ||
            error?.message ||
            "Something went wrong!";
          toast.error(msg);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <InputField
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mail:"
            wrapperStyles={
              touched.email && errors.email
                ? styles.inputWrapperError
                : styles.inputWrapperDefault
            }
            inputStyles={`${styles.inputEmail} ${
              touched.email && errors.email
                ? styles.inputError
                : touched.email && !errors.email
                ? styles.inputSuccess
                : ""
            }`}
          >
            <IconValidation touched={touched.email} errors={errors.email} />
            {touched.email && errors.email ? (
              <AuthErrorMessage message={errors.email} />
            ) : null}
          </InputField>

          <InputField
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            label="Password:"
            icon={true}
            touched={touched.password}
            errors={errors.password}
            wrapperStyles={styles.passwordWrapper}
            inputStyles={`${styles.inputPassword} ${
              touched.password && errors.password
                ? styles.inputError
                : touched.password && !errors.password
                ? styles.inputSuccess
                : ""
            }`}
          >
            <IconValidation
              touched={touched.password}
              errors={errors.password}
            />
            {touched.password && errors.password ? (
              <AuthErrorMessage message={errors.password} />
            ) : null}
          </InputField>

          <div className={styles.actions}>
            <Button
              type="submit"
              title="Log in"
              className={styles.button}
              primary={true}
            />
            <Link to="/register" className={styles.link}>
              Don't have an account?
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
