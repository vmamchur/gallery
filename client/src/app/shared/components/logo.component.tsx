import { Link } from "react-router-dom";

import ImageIcon from "../../../assets/icons/image-placeholder.svg?react";

const Logo = () => {
  return (
    <Link to="/">
      <ImageIcon width={48} height={48} />
    </Link>
  );
};

export default Logo;
