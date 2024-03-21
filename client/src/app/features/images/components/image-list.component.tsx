import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import ImageItem from "./image-item.component";
import { imagesActions } from "src/app/store/slices/images.slice";

const ImageList = () => {
  const { images } = useAppSelector((state) => state.images);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(imagesActions.getAll());
  }, [dispatch]);

  return (
    <ul className="columns-3 lg:columns-4 gap-2 lg:gap-3">
      {images?.map((image) => (
        <li className="mb-2 lg:mb-3" key={image._id}>
          <ImageItem image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
