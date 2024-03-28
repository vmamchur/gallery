import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import Button from "../button.component";
import { authActions } from "src/app/store/slices/auth.slice";

const AuthButtons = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getButtonVariant = (route: "/sign-in" | "/sign-up") => {
    return pathname === route ? "solid" : "outline";
  };

  return (
    <div>
      {currentUser ? (
        <Button
          variant="solid"
          onClick={() => dispatch(authActions.logout())}
          size="m"
        >
          Logout
        </Button>
      ) : (
        <div className="flex gap-2 lg:gap-4">
          <Button
            variant={getButtonVariant("/sign-in")}
            onClick={() => navigate("/sign-in")}
            size="m"
          >
            Sign In
          </Button>

          <Button
            variant={getButtonVariant("/sign-up")}
            onClick={() => navigate("/sign-up")}
            size="m"
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
