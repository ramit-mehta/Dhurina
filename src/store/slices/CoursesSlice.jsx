import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: [],
  reducers: {
    getCourse(state, action) {
      state = action.payload;
    },
  },
});
export default courseSlice.reducer;
