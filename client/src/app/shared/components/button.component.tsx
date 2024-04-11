import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

const BUTTON_VARIANT = {
  solid: "border-black bg-black text-white",
  outline: "border-black text-black",
  ghost: "border-transparent text-black",
};

const BUTTON_SIZE = {
  s: "px-3 py-1 rounded-md text-caption",
  m: "px-4 py-2 rounded-md text-body",
  l: "px-4 py-3 rounded-lg text-body-lg",
};

type ButtonProps = PropsWithChildren<{
  variant: keyof typeof BUTTON_VARIANT;
  size: keyof typeof BUTTON_SIZE;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean; 
}>;

const Button: FC<ButtonProps> = ({
  variant,
  size,
  onClick,
  type = "button",
  isDisabled = false,
  isLoading = false,
  children,
}) => {
  return (
    <button
      className={classNames(
        "border-2 text-center disabled:opacity-50 disabled:cursor-not-allowed",
        BUTTON_VARIANT[variant],
        BUTTON_SIZE[size],
      )}
      onClick={onClick}
      type={type}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
