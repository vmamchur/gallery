import { FC, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren;

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-screen lg:max-w-screen-2xl mx-auto pt-16 px-4 lg:px-8 flex flex-col">
      {children}
    </div>
  );
};

export default Container;
