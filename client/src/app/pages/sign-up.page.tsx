import Header from "@shared/components/header/header.component";
import SignUpForm from "@features/auth/components/sign-up-form.component";
import Container from "@shared/components/container.component";

const SignUp = () => {
  return (
    <>
      <Header />
      <Container>
        <SignUpForm />
      </Container>
    </>
  );
};

export default SignUp;
