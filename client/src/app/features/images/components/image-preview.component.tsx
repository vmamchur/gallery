import { FC, useState } from "react";

import ErrorMessage from "@shared/components/error-message.component";
import ResetIcon from "../../../../assets/icons/trash.svg?react";

type ImagePreviewProps = {
  image: string;
  error?: string;
  onReset: () => void;
};

const ImagePreview: FC<ImagePreviewProps> = ({ image, error, onReset }) => {
  const [isPreviewHovered, setIsPreviewHovered] = useState(false);

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-full flex justify-center items-center"
          src={image}
          onMouseEnter={() => setIsPreviewHovered(true)}
        />
        {isPreviewHovered && (
          <button
            className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center"
            onClick={onReset}
            onMouseLeave={() => setIsPreviewHovered(false)}
          >
            <ResetIcon width={200} height={200} />
          </button>
        )}
      </div>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default ImagePreview;
