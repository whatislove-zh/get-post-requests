import { createSlice } from "@reduxjs/toolkit";

const expandSlice = createSlice({
    name: '@@theme',
    initialState: true,
    reducers: {
      setExpand: (_, action) => action.payload,
    }
  });

export const { setExpand } = expandSlice.actions;
export const expandReduser = expandSlice.reducer;
