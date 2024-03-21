import Icon from "./icon.component";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Icon name="camera" width={48} height={48} />
      <h1 className="text-header-3">Gallery</h1>
    </div>
  );
};

export default Logo;
