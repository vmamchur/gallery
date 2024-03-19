import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@shared/components/input.component";
import AuthForm from "./auth-form.component";
import signUpSchema from "../schemas/sign-up.schema";
import { ISignUp } from "../types/sign-up.interface";

const SignUp = () => {
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });
  const { errors } = methods.formState;

  const onSubmit = (data: ISignUp) => console.log(data);

  return (
    <FormProvider {...methods}>
      <AuthForm title="Sign Up" onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label="Username"
          error={errors.username?.message}
          name="username"
        />

        <Input
          label="Password"
          error={errors.password?.message}
          name="password"
        />

        <Input
          label="Confirm password"
          error={errors.confirmPassword?.message}
          name="confirmPassword"
        />
      </AuthForm>
    </FormProvider>
  );
};

export default SignUp;
