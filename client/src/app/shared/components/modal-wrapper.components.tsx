import { FC, PropsWithChildren, useEffect } from "react";

import { useAppDispatch } from "src/app/store/hooks";
import { modalsActions } from "src/app/store/slices/modals.slice";

type ModalWrapperProps = PropsWithChildren<{
  isOpen: boolean;
}>;

const ModalWrapper: FC<ModalWrapperProps> = ({ children, isOpen }) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(modalsActions.closeModal());
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(modalsActions.closeModal());
      }
    };

    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, dispatch]);

  return (
    isOpen && (
      <div
        className="min-h-screen fixed top-0 bottom-0 right-0 left-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
        onClick={handleClose}
      >
        <div
          className="w-full py-4 px-6 mx-10 lg:mx-32 border-2 border-black rounded-lg bg-white"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default ModalWrapper;
