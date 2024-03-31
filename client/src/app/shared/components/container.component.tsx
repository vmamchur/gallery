import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import { EModalName } from "@shared/types/modal/modal-name.enum";
import { useAppSelector } from "src/app/store/hooks";

type ContainerProps = PropsWithChildren;

const Container: FC<ContainerProps> = ({ children }) => {
  const { activeModalName } = useAppSelector((state) => state.modals);

  return (
    <div
      className={classNames(
        "h-screen lg:max-w-screen-2xl mx-auto pt-[72px] px-4 lg:px-8 flex flex-col",
        { "overflow-y-hidden": activeModalName in EModalName },
      )}
    >
      {children}
    </div>
  );
};

export default Container;
