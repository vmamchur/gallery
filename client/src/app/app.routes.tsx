import { createBrowserRouter } from "react-router-dom";

import SignUpPage from "./pages/sign-up.page";
import SignInPage from "./pages/sign-in.page";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default router;
