import { createBrowserRouter } from "react-router-dom";

import RequireAuth from "@shared/components/require-auth.component";
import Gallery from "./pages/gallery.page";
import ProtectedTest from "./pages/protected-test.page";
import SignIn from "./pages/sign-in.page";
import SignUp from "./pages/sign-up.page";

const router = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Gallery />,
  },
  {
    path: "/protected",
    element: (
      <RequireAuth>
        <ProtectedTest />
      </RequireAuth>
    ),
  },
]);

export default router;
