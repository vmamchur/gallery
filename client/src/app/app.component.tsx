import { RouterProvider } from "react-router-dom";

import router from "./app.routes";
import Container from "@shared/components/container.component";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { authActions } from "./store/slices/auth-slice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.refresh());
  }, [dispatch]);

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
