import { FC } from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";

type InputProps = {
  label?: string;
  placeholder?: string;
  error?: string;
  name?: string;
};

const Input: FC<InputProps> = ({ label, placeholder, error, name }) => {
  const { register } = useFormContext();

  return (
    <label className="flex flex-col">
      {label && <span className="text-caption uppercase">{label}</span>}

      <input
        className={classNames(
          "py-1 px-3 border-2 rounded-lg text-body border-black text-black placeholder:text-primary-400 outline-none",
          {
            "border-error": error,
          },
        )}
        placeholder={placeholder}
        {...(name ? register(name) : {})}
      />

      {error && (
        <div className="text-caption text-error">
          <span>{error}</span>
        </div>
      )}
    </label>
  );
};

export default Input;
