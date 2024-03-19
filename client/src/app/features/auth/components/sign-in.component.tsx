import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthForm from "./auth-form.component";
import Input from "@shared/components/input.component";
import signInSchema from "../schemas/sign-in.schema";
import { ISignIn } from "../types/sign-in.interface";

const SignIn = () => {
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });
  const { errors } = methods.formState;

  const onSubmit = (data: ISignIn) => console.log(data);

  return (
    <FormProvider {...methods}>
      <AuthForm title="Sign In" onSubmit={methods.handleSubmit(onSubmit)}>
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
      </AuthForm>
    </FormProvider>
  );
};

export default SignIn;
