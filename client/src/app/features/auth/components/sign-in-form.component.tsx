import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthForm from "./auth-form.component";
import Input from "@shared/components/input.component";
import signInSchema from "../schemas/sign-in.schema";
import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import { authActions } from "src/app/store/slices/auth.slice";
import IAuthRequest from "@shared/types/auth/auth-request.interface";

const SignInForm = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (loginData: IAuthRequest) => {
    await dispatch(authActions.login(loginData));

    if (isLoggedIn) {
      navigate("/");
    }
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
