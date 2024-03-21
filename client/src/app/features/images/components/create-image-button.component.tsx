import { ChangeEvent, useRef } from "react";

import FloatingButton from "@shared/components/floating-button.component";
import { useAppDispatch } from "src/app/store/hooks";
import { imagesActions } from "src/app/store/slices/images.slice";

const CreateImageButton = () => {
  const dispatch = useAppDispatch();

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (!uploadRef.current) {
      return;
    }

    uploadRef.current.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const selectedFile = files[0];

      await dispatch(imagesActions.create(selectedFile));
    }
  };

  return (
    <div className="fixed right-5 bottom-5">
      <FloatingButton variant="solid" onClick={handleUploadClick} />
      <input
        className="hidden"
        type="file"
        ref={uploadRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default CreateImageButton;
