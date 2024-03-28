import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import imagesReducer from "./slices/images.slice";
import modalsReducer from "./slices/modals.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imagesReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
