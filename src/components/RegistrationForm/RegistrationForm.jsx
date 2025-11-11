import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { registerValidation } from "../../utils/schemas/authValidation";
import { useDispatch, useSelector } from "react-redux";
import { register as registerThunk } from "../../store/auth/authOperations";

import toast from "react-hot-toast";
import Button from "../GeneralUse/Button/Button";
import InputField from "../GeneralUse/InputField/InputField";
import AuthError from "../AuthError/AuthError";
import IconValidation from "../GeneralUse/IconValidation/IconValidation";

import styles from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registerValidation}
      onSubmit={
        async ({ name, email, password }, { resetForm }) => {
          if (!name.trim() || !email.trim() || !password.trim()) return;
          
          try {
            await dispatch(registerThunk({ name, email, password })).unwrap();
            toast.success("Registration successful! Welcome to ReadJourney!");
            resetForm();
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } catch (error) {
            console.error("Registration failed:", error);
            const msg =
              (typeof error === "string" && error) ||
              error?.message ||
              "Something went wrong!";
            toast.error(msg);
          }
        }
      }
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          <InputField
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Name:"
            touched={touched.name}
            errors={errors.name}
            toggleShowPassword={() => {}}
            inputStyles={`${styles.inputName} ${
              touched.name && errors.name
                ? styles.inputError
                : touched.name && !errors.name
                ? styles.inputSuccess
                : ""
            }`}
            wrapperStyles={
              touched.name && errors.name
                ? styles.inputWrapperError
                : styles.inputWrapperDefault
            }
          >
            <IconValidation touched={touched.name} errors={errors.name} />
            {touched.name && errors.name ? (
              <AuthError message={errors.name} />
            ) : null}
          </InputField>

          <InputField
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mail:"
            touched={touched.email}
            errors={errors.email}
            toggleShowPassword={() => {}}
            inputStyles={`${styles.inputEmail} ${
              touched.email && errors.email
                ? styles.inputError
                : touched.email && !errors.email
                ? styles.inputSuccess
                : ""
            }`}
            wrapperStyles={
              touched.email && errors.email
                ? styles.inputWrapperError
                : styles.inputWrapperDefault
            }
          >
            <IconValidation touched={touched.email} errors={errors.email} />
            {touched.email && errors.email ? (
              <AuthError message={errors.email} />
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
            touched={touched.password}
            errors={errors.password}
            label="Password:"
            icon={true}
            inputStyles={`${styles.inputPassword} ${
              touched.password && errors.password
                ? styles.inputErrorWithPad
                : touched.password && !errors.password
                ? styles.inputSuccessWithPad
                : ""
            }`}
            wrapperStyles={styles.passwordWrapper}
          >
            <IconValidation
              touched={touched.password}
              errors={errors.password}
            />
            {touched.password && errors.password ? (
              <AuthError message={errors.password} />
            ) : touched.password && !errors.password ? (
              <AuthError message="Password is secure" isError={false} />
            ) : null}
          </InputField>

          <div className={styles.actions}>
            <Button
              type="submit"
              title={isLoading ? "Registering..." : "Registration"}
              className={styles.button}
              primary={true}
              onClick={() => {}}
              disabled={isLoading}
            />
            <Link to="/login" className={styles.link}>
              Already have an account?
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
