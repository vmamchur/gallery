import { FC, PropsWithChildren } from "react";

import Button from "@shared/components/button.component";

type AuthFormProps = PropsWithChildren<{
  title: string;
  onSubmit: () => void;
}>;

const AuthForm: FC<AuthFormProps> = ({ title, onSubmit, children }) => {
  return (
    <form
      className="h-screen w-full lg:w-1/3 mx-auto flex flex-col justify-center gap-2"
      onSubmit={onSubmit}
    >
      <h2 className="self-center text-header-2 lg:text-header-1">{title}</h2>
      <div className="flex flex-col gap-1">{children}</div>
      <Button variant="solid" size="m" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AuthForm;
