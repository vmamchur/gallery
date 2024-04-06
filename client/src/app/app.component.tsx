import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./app.routes";
import { useAppDispatch } from "./store/hooks";
import { authActions } from "./store/slices/auth.slice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.refresh());
  }, [dispatch]);

  return <RouterProvider router={router} />
  
};

export default App;
