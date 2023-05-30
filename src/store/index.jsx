import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/CoursesSlice";

const store = configureStore({
  reducer: {
    course: courseSlice,
  },
});

export default store;
