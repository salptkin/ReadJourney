import * as Yup from "yup";

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerValidation = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .matches(emailRegex, "Please provide a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password should be at least 7 characters long")
    .required("Please enter your password"),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Please provide a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password should be at least 7 characters long")
    .required("Please enter your password"),
});
