import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "@store/index";

import { IRoom } from "@types/room";
import { IRoomState, IRoomList, IFriend } from "@types/roomList";

const initialRoomState: IRoomState = {
  hasRoom: false,
  unReadRoom: 0,
  roomList: [],
  onSearch: false,
  friendList: [],
  currentRoom: { roomInfo: null, chatData: [] },
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: initialRoomState,
  reducers: {
    setRoomListData(
      state,
      action: PayloadAction<{
        chat?: IRoomList[];
        onSearch?: boolean;
        friend?: IFriend[] | [];
      }>
    ) {
      const { chat, onSearch = false, friend } = action.payload;

      if (chat) {
        const unReadRoom = chat?.filter(
          (room: IRoomList) => room.unReadChatLength > 0
        )?.length;

        state.hasRoom = chat?.length > 0;
        state.unReadRoom = unReadRoom || 0;
        state.roomList = chat;
      }
      state.onSearch = onSearch;
      if (friend) {
        state.friendList = friend;
      }
    },
    setCurrentRoomData(state, action: PayloadAction<{ room: IRoom }>) {
      const { room } = action.payload;

      state.currentRoom = {
        roomInfo: room?.roomInfo,
        chatData: room?.chatData,
      };
    },
  },
});

export const roomAction = roomSlice.actions;
export const roomReducer = roomSlice.reducer;

const selectHasRoom = (state: rootState) => state.roomReducer.hasRoom;
const selectUnReadRoom = (state: rootState) => state.roomReducer.unReadRoom;
const selectRoomListData = (state: rootState) => state.roomReducer.roomList;
const selectOnSearch = (state: rootState) => state.roomReducer.onSearch;
const selectCurrentRoomId = (state: rootState) =>
  state.roomReducer.currentRoom?.roomInfo?.roomId;
const selectCurrentRoomInfo = (state: rootState) =>
  state.roomReducer.currentRoom?.roomInfo;
const selectCurrentChatData = (state: rootState) =>
  state.roomReducer.currentRoom?.chatData;
const selectFriendList = (state: rootState) => state.roomReducer.friendList;

export const roomSelector = {
  selectHasRoom,
  selectUnReadRoom,
  selectRoomListData,
  selectOnSearch,
  selectCurrentRoomId,
  selectCurrentRoomInfo,
  selectCurrentChatData,
  selectFriendList,
};
