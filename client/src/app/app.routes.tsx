import { createBrowserRouter } from "react-router-dom";

import SignUpPage from "./pages/sign-up.page";
import SignInPage from "./pages/sign-in.page";
import RequireAuth from "@shared/components/require-auth.component";
import ProtectedPage from "./pages/protected.page";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <ProtectedPage />
      </RequireAuth>
    ),
  },
]);

export default router;
