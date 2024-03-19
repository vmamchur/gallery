import { FC, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren;

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-screen lg:max-w-7xl mx-auto pt-14 px-4 lg:px-8 flex flex-col">
      {children}
    </div>
  );
};

export default Container;
