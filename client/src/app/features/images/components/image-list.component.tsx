import ImageItem from "./image-item.component";

const ImageList = () => {
  return (
    <ul className="columns-3 lg:columns-4 gap-2 lg:gap-3">
      {Array(20)
        .fill(0)
        .map(() => (
          <li className="mb-2 lg:mb-3">
            <ImageItem />
          </li>
        ))}
    </ul>
  );
};

export default ImageList;
