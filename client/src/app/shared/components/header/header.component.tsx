import { useAppSelector } from "src/app/store/hooks";
import Logo from "../logo.component";
import AuthButtons from "./auth-buttons";

const Header = () => {
  const { isChecked } = useAppSelector((state) => state.auth);

  return (
    <header className="h-14 w-full px-4 lg:px-8 flex items-center justify-center border-b-2 border-b-black">
      <div className="flex flex-grow items-center justify-between">
        <Logo />
        {isChecked && <AuthButtons />}
      </div>
    </header>
  );
};

export default Header;
