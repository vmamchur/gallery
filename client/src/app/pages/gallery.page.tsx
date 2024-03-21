import CreateImageButton from "@features/images/components/create-image-button.component";
import ImageList from "@features/images/components/image-list.component";
import Header from "@shared/components/header.component";

const Gallery = () => {
  return (
    <>
      <Header />
      <ImageList />
      <CreateImageButton />
    </>
  );
};

export default Gallery;
