import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "../../../store";

const initialRoomState: any = {
  isLoaded: false,
  roomInfo: null,
  chatData: [],
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: initialRoomState,
  reducers: {},
});

export const roomAction = roomSlice.actions;
export const roomReducer = roomSlice.reducer;

const selectIsLoad = (state: rootState) => state.roomReducer.isLoaded;

export const roomSelector = {
  selectIsLoad,
};
