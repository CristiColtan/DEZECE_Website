import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  sidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOpenSidebar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setOpenSidebar } = userSlice.actions;

export default userSlice.reducer;
