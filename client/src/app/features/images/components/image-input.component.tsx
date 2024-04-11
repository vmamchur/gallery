import { ChangeEvent, DragEvent, FC, useRef } from "react";

type ImageInputProps = {
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
}

const ImageInput: FC<ImageInputProps> = ({ onFileChange, onDrop }) => {
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (!uploadRef.current) {
      return;
    }

    uploadRef.current.click();
  };

  return (
    <div>
      <div
        className="h-96 px-8 flex justify-center items-center text-header-3 border-2 border-dashed border-primary-200 text-center cursor-pointer"
        onClick={handleUploadClick}
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
      >
        Drag and drop or browse to choose a file
      </div>
      <input
        className="hidden"
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/gif"
        ref={uploadRef}
        onChange={onFileChange}
      />
    </div>
  );
};

export default ImageInput;
