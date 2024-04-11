import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./app.routes";
import { useAppDispatch } from "./store/hooks";
import { authActions } from "./store/slices/auth.slice";
import SocialLinksOverlay from "@shared/components/social-links-overlay.component";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.refresh());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <SocialLinksOverlay />
    </>
  );
};

export default App;
