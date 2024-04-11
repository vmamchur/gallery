import { FC } from "react";
import classNames from "classnames";

const BUTTON_VARIANT = {
  solid: "border-black bg-black",
  outline: "border-black",
  ghost: "border-transparent",
};

const BUTTON_SIZE = {
  s: "px-1 py-1 rounded-md",
  m: "px-2 py-2 rounded-md",
  l: "px-3 py-3 rounded-lg",
};

const ICON_COLOR = {
  solid: "#FFFFFF",
  outline: "#1B1B1B",
  ghost: "#1B1B1B",
};

type IconButtonProps = {
  variant: keyof typeof BUTTON_VARIANT;
  size: keyof typeof BUTTON_SIZE;
  onClick: () => void;
  isDisabled?: boolean;
  Icon: FC<{ fill?: string }>;
};

const IconButton: FC<IconButtonProps> = ({
  variant,
  size,
  onClick,
  isDisabled,
  Icon,
}) => {
  return (
    <button
      className={classNames(
        "flex justify-center items-center border-2 disabled:opacity-50 disabled:cursor-not-allowed",
        BUTTON_VARIANT[variant],
        BUTTON_SIZE[size],
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Icon fill={ICON_COLOR[variant]} />
    </button>
  );
};

export default IconButton;
