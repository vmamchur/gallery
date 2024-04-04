import CreateImageButton from "@features/images/components/create-image-button.component";
import ImageDetailsModal from "@features/images/components/image-details-modal.component";
import ImageList from "@features/images/components/image-list.component";
import Container from "@shared/components/container.component";
import Header from "@shared/components/header/header.component";

const Gallery = () => {
  return (
    <>
      <Header />
      <Container>
        <ImageList />
        <CreateImageButton />
        <ImageDetailsModal />
      </Container>
    </>
  );
};

export default Gallery;
