import { useLocation, useNavigate } from "react-router-dom";

import Button from "./button.component";
import Logo from "./logo.component";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getButtonVariant = (route: "/sign-in" | "/sign-up") => {
    return pathname === route ? "solid" : "outline";
  };

  return (
    <header className="absolute top-0 left-0 h-14 w-full px-4 lg:px-8 flex items-center justify-center shadow-xl">
      <div className="lg:max-w-7xl flex flex-grow items-center justify-between">
        <Logo />
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
      </div>
    </header>
  );
};

export default Header;
