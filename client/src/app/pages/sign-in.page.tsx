import Header from "@shared/components/header/header.component";
import SignInForm from "@features/auth/components/sign-in-form.component";
import Container from "@shared/components/container.component";

const SignIn = () => {
  return (
    <>
      <Header />
      <Container>
        <SignInForm />
      </Container>
    </>
  );
};

export default SignIn;
