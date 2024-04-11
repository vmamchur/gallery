import { FC } from "react";

type EmptyStateMessageProps = {
  message: string;
};

const EmptyStateMessage: FC<EmptyStateMessageProps> = ({ message }) => {
  return (
    <div className="h-container flex flex-col justify-center items-center text-primary-500 text-display">
      <p>{message}</p>
    </div>
  );
};

export default EmptyStateMessage;
