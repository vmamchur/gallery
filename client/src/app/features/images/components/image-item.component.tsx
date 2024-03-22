import { FC } from "react";

import IImage from "@shared/types/image/image.interface";
import generateImageUrl from "@shared/helpers/generate-image-url";

type ImageItemProps = {
  image: IImage;
};

const ImageItem: FC<ImageItemProps> = ({ image }) => {
  return <img className="rounded" src={generateImageUrl(image.filename)} />;
};

export default ImageItem;
