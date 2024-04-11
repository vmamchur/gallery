import { FC } from "react";

import ErrorMessage from "@shared/components/error-message.component";

type ImagePreviewProps = {
  image: string;
  error?: string;
};

const ImagePreview: FC<ImagePreviewProps> = ({ image, error }) => {
  return (
    <div>
      <img
        className="w-full h-full flex justify-center items-center"
        src={image}
      />

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ImagePreview;
