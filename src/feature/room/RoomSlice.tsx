import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "../../store";
import { IChatRoomState, IChatRoom } from "../../types";

const initialRoomState: IChatRoomState = {
  hasRoomData: false,
  roomInfo: null,
  chatData: [],
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: initialRoomState,
  reducers: {
    setRoomData(state, action: PayloadAction<{ data: IChatRoom }>) {
      const { data } = action.payload;

      state.hasRoomData = true;
      state.roomInfo = data.roomInfo;
      state.chatData = data.chatData;
    },
  },
});

export const roomAction = roomSlice.actions;
export const roomReducer = roomSlice.reducer;

const selectHasRoomData = (state: rootState) => state.roomReducer.hasRoomData;
const selectRoomInfo = (state: rootState) => state.roomReducer.roomInfo;
const selectRoomId = (state: rootState) => state.roomReducer.roomInfo?.roomId;
const selectChatData = (state: rootState) => state.roomReducer.chatData;

export const roomSelector = {
  selectHasRoomData,
  selectRoomInfo,
  selectRoomId,
  selectChatData,
};
