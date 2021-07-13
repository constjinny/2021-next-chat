import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "../../store";
import { IChatRoomState } from "../../types";

const initialRoomState: IChatRoomState = {
  roomInfo: null,
  chatData: [],
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: initialRoomState,
  reducers: {
    // setChatDataId(state, action: PayloadAction<{ roomId: string }>) {
    //   const { roomId } = action.payload;
    //   const unReadRoom = data.filter(
    //     (room: IRoomList) => room.unReadChatLength > 0
    //   )?.length;
    //   state.hasRoom = data.length > 0;
    //   state.unReadRoom = unReadRoom || 0;
    //   state.roomList = data;
    //   state.onSearch = onSearch;
    // },
  },
});

export const roomAction = roomSlice.actions;
export const roomReducer = roomSlice.reducer;

const selectIsLoad = (state: rootState) => state.roomReducer.isLoaded;

export const roomSelector = {
  selectIsLoad,
};
