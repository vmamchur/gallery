import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@shared/components/input.component";
import AuthForm from "./auth-form.component";
import signUpSchema from "../schemas/sign-up.schema";
import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import { authActions } from "src/app/store/slices/auth.slice";
import IAuthRequest from "@shared/types/auth/auth-request.interface";

const SignUpForm = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data: IAuthRequest) => {
    await dispatch(authActions.register(data));

    if (isLoggedIn) {
      navigate("/");
    }
  };

  const { errors } = methods.formState;

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
          type="password"
        />

        <Input
          label="Confirm password"
          error={errors.confirmPassword?.message}
          name="confirmPassword"
          type="password"
        />
      </AuthForm>
    </FormProvider>
  );
};

export default SignUpForm;
