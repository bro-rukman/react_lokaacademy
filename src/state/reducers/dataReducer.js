import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
  name: "data",
  initialState: {
    dataCard: [],
  },
  reducers: {
    addDataCard(state, action) {
      state.dataCard = action.payload;
    },
  },
});
export const DataReducer = dataReducer.reducer;
export const DataAction = dataReducer.actions;
