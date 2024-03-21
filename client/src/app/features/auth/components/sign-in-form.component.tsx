import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthForm from "./auth-form.component";
import Input from "@shared/components/input.component";
import signInSchema from "../schemas/sign-in.schema";
import { useAppDispatch } from "src/app/store/hooks";
import { authActions } from "src/app/store/slices/auth.slice";
import AuthRequest from "@shared/types/auth-request.interface";

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (authData: AuthRequest) => {
    await dispatch(authActions.login(authData));
    navigate("/");
  };

  const { errors } = methods.formState;

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
          type="password"
        />
      </AuthForm>
    </FormProvider>
  );
};

export default SignInForm;
