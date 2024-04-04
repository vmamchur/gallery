import Container from "@shared/components/container.component";
import Header from "@shared/components/header/header.component";

const ProtectedTest = () => {
  return (
    <>
      <Header />
      <Container>protected</Container>
    </>
  );
};

export default ProtectedTest;
