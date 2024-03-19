import * as yup from "yup";

const signUpSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Username is required.")
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username must not exceed 20 characters."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters."),
  confirmPassword: yup
    .string()
    .required("Confirm password is required.")
    .oneOf([yup.ref("password")], "Passwords must match."),
});

export default signUpSchema;
