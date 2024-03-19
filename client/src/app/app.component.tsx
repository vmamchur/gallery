import { RouterProvider } from "react-router-dom";

import router from "./app.routes";
import Container from "@shared/components/container.component";

const App = () => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
