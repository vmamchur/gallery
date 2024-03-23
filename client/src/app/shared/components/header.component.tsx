import { useLocation, useNavigate } from "react-router-dom";

import Button from "./button.component";
import Logo from "./logo.component";
import Task from "src/assets/icons/Task.svg?react";
import { useAppDispatch, useAppSelector } from "src/app/store/hooks";
import { authActions } from "src/app/store/slices/auth.slice";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getButtonVariant = (route: "/sign-in" | "/sign-up") => {
    return pathname === route ? "solid" : "outline";
  };

  return (
    <header className="absolute top-0 left-0 h-14 w-full px-4 lg:px-8 flex items-center justify-center shadow-xl">
      <div className="flex flex-grow items-center justify-between">
        <Logo />
        <div className="flex gap-2 lg:gap-4">
          {currentUser ? (
            <Button
              variant="solid"
              onClick={() => dispatch(authActions.logout())}
              size="m"
            >
              Logout
            </Button>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
