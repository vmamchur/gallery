import { FC, PropsWithChildren } from "react";

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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="min-h-screen absolute top-0 right-0 left-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="w-full py-4 px-6 my-4 mx-10 lg:mx-32 border-2 border-black rounded-lg bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
