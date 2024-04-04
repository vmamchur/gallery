import CreateImageForm from "@features/images/components/create-image-form.component";
import Container from "@shared/components/container.component";
import Header from "@shared/components/header/header.component";

const CreateImage = () => {
  return (
    <>
      <Header />
      <Container>
        <CreateImageForm />
      </Container>
    </>
  );
};

export default CreateImage;
