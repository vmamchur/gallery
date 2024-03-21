import { FC } from "react";
import classNames from "classnames";

import Icon from "./icon.component";

const BUTTON_VARIANT = {
  solid: "border-black bg-black",
  outline: "border-black",
  ghost: "border-transparent shadow shadow-primary-400",
};

const ICON_COLOR = {
  solid: "#FFFFFF",
  outline: "#1B1B1B",
  ghost: "#1B1B1B",
};

type FloatingButtonProps = {
  variant: keyof typeof BUTTON_VARIANT;
  onClick?: () => void;
  disabled?: boolean;
};

const FloatingButton: FC<FloatingButtonProps> = ({
  variant,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "h-16 w-16 rounded-full flex justify-center items-center border-[3px] disabled:opacity-50 disabled:cursor-not-allowed",
        BUTTON_VARIANT[variant],
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon name="plus" width={24} height={24} fill={ICON_COLOR[variant]} />
    </button>
  );
};

export default FloatingButton;
