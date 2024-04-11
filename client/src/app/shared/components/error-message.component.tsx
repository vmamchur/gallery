import { FC } from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-caption text-error">
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
