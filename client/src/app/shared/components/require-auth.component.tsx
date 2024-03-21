import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "src/app/store/hooks";

type RequireAuthProps = PropsWithChildren;

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { currentUser, isChecked } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isChecked && !currentUser) {
      navigate("/sign-in");
      return;
    }
  }, [currentUser, isChecked, navigate]);

  return children;
};

export default RequireAuth;
