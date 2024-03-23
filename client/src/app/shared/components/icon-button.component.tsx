import React, { ReactNode } from "react";

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

const ICON_COLOR = {
  solid: "#FFFFFF",
  outline: "#1B1B1B",
  ghost: "#1B1B1B",
};

type ButtonProps = {
  variant: keyof typeof BUTTON_VARIANT;
  size: keyof typeof BUTTON_SIZE;
  onClick?: () => void;
  disabled?: boolean;
  icon: ReactNode;
};

const IconButton: React.FC<ButtonProps> = ({ icon }) => {
  return (
    <button className="flex justify-center items-center px-2 py-1 border-black border-2 rounded ">
      {icon}
    </button>
  );
};

export default IconButton;
