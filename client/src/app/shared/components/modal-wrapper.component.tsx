import React, { PropsWithChildren, ReactNode } from "react";

type ModalWrapperProps = PropsWithChildren<{
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}>;

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-lg p-6 m-4 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
