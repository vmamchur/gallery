import * as yup from "yup";

const signInSchema = yup.object({
  username: yup.string().trim().required("Username is required."),
  password: yup.string().required("Password is required."),
});

export default signInSchema;
