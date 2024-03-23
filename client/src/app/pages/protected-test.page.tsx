import ImageDetails from "@features/images/components/image-details.component";
import Header from "@shared/components/header.component";
import ModalWrapper from "@shared/components/modal-wrapper.component";
import { useState } from "react";

const ProtectedTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>
      <ModalWrapper
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ImageDetails />
      </ModalWrapper>
    </>
  );
};

export default ProtectedTest;
