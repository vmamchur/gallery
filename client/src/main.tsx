import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app/app.component";
import { store } from "./app/store/store";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
