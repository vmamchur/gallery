import { FC } from "react";

import { IMAGES_URL } from "@shared/constants/main";
import IImage from "@shared/types/image/image.interface";

type ImageItemProps = {
  image: IImage;
};

const ImageItem: FC<ImageItemProps> = ({ image }) => {
  return <img className="rounded" src={`${IMAGES_URL}${image.filename}`} />;
};

export default ImageItem;
