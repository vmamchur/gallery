import { FC } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

import ErrorMessage from "./error-message.component";

type InputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  name?: string;
  type?: "text" | "password";
};

const Input: FC<InputProps> = ({
  label,
  placeholder,
  error,
  name,
  type = "text",
}) => {
  const { register } = useFormContext() || {};

  return (
    <label className="flex flex-col">
      {label && <span className="text-caption uppercase">{label}</span>}

      <input
        className={classNames(
          "py-1 px-3 border-2 rounded-lg text-body border-black text-black placeholder:text-primary-400 outline-none",
          {
            "border-error": error,
          }
        )}
        placeholder={placeholder}
        type={type}
        {...(name ? register(name) : {})}
      />

      {error && <ErrorMessage message={error} />}
    </label>
  );
};

export default Input;
