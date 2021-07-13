import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "../../../store";

const initialRoomListState: any = {
  isLoaded: false,
  roomList: [],
};

export const roomListSlice = createSlice({
  name: "roomListSlice",
  initialState: initialRoomListState,
  reducers: {},
});

export const roomListAction = roomListSlice.actions;
export const roomListReducer = roomListSlice.reducer;

const selectIsLoad = (state: rootState) => state.roomListReducer.isLoaded;

export const roomListSelector = {
  selectIsLoad,
};
