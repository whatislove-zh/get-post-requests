import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPositions = createAsyncThunk(
  "@@positions/load-positions",
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_POSITIONS);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const positionSlice = createSlice({
  name: "@@positions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPositions.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadPositions.rejected, (state, action) => {
        state.error = action.payload || action.meta.error;
        state.status = "rejected";
      })
      .addCase(loadPositions.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data.positions;
      });
  },
});

export const positionsReduser = positionSlice.reducer;

//selectors

export const selectPositions = (state) => state.positions.list;
export const selectPositionsInfo = (state) => ({
  status: state.positions.status,
  error: state.positions.error,
  qty: state.positions.list.lenght,
});
