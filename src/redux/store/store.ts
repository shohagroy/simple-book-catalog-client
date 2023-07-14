import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
