import logoIcon from "../../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoIcon} />
      <h1 className="text-header-3">Gallery</h1>
    </div>
  );
};

export default Logo;
