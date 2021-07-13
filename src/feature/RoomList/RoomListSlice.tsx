import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "../../store";
import { IRoomListReducer, IRoomList } from "../../types";

const initialRoomListState: IRoomListReducer = {
  hasRoom: false,
  unReadRoom: 0,
  roomList: [],
  onSearch: false,
};

export const roomListSlice = createSlice({
  name: "roomListSlice",
  initialState: initialRoomListState,
  reducers: {
    setRoomListData(
      state,
      action: PayloadAction<{ data: IRoomList[]; onSearch?: boolean }>
    ) {
      const { data, onSearch = false } = action.payload;

      const unReadRoom = data.filter(
        (room: IRoomList) => room.unReadChatLength > 0
      )?.length;

      state.hasRoom = data.length > 0;
      state.unReadRoom = unReadRoom || 0;
      state.roomList = data;
      state.onSearch = onSearch;
    },
  },
});

export const roomListAction = roomListSlice.actions;
export const roomListReducer = roomListSlice.reducer;

const selectHasRoom = (state: rootState) => state.roomListReducer.hasRoom;
const selectUnReadRoom = (state: rootState) => state.roomListReducer.unReadRoom;
const selectRoomListData = (state: rootState) => state.roomListReducer.roomList;
const selectOnSearch = (state: rootState) => state.roomListReducer.onSearch;

export const roomListSelector = {
  selectHasRoom,
  selectUnReadRoom,
  selectRoomListData,
  selectOnSearch,
};
