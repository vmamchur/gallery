import { FC } from "react";
import classNames from "classnames";

const BUTTON_VARIANT = {
  solid: "border-black bg-black text-white",
  outline: "border-black text-black",
  ghost: "border-transparent text-black",
};

type FloatingButtonProps = {
  variant: keyof typeof BUTTON_VARIANT;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const FloatingButton: FC<FloatingButtonProps> = ({
  variant,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "h-14 w-14 rounded-full border-2 text-center disabled:opacity-50 disabled:cursor-not-allowed",
        BUTTON_VARIANT[variant],
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    />
  );
};

export default FloatingButton;
