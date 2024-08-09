import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../pages/users/UsersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
