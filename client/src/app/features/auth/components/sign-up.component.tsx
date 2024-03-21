import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@shared/components/input.component";
import AuthForm from "./auth-form.component";
import signUpSchema from "../schemas/sign-up.schema";
import { AuthRequest } from "src/app/api/types/auth.interface";
import { useAppDispatch } from "src/app/store/hooks";
import { authActions } from "src/app/store/slices/auth-slice";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data: AuthRequest) => {
    await dispatch(authActions.register(data));
    navigate("/");
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

export default SignUp;
