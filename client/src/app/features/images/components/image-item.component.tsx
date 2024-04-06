import { FC } from "react";

import { useAppDispatch } from "src/app/store/hooks";
import IImage from "@shared/types/image/image.interface";
import generateImageUrl from "@shared/helpers/generate-image-url";
import { modalsActions } from "src/app/store/slices/modals.slice";
import { EModalName } from "@shared/types/modal/modal-name.enum";
import { imagesActions } from "src/app/store/slices/images.slice";

type ImageItemProps = {
  image: IImage;
};

const ImageItem: FC<ImageItemProps> = ({ image }) => {
  const dispatch = useAppDispatch();

  const handleImageItemClick = () => {
    dispatch(imagesActions.selectImage(image));
    dispatch(modalsActions.openModal(EModalName.ImageDetails));
  };

  return (
    <img
      className="rounded cursor-pointer" 
      src={generateImageUrl(image.filename)}
      onClick={handleImageItemClick}
    />
  );
};

export default ImageItem;
