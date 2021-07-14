import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "@store/index";

import { IRoom } from "@type/room";
import { IRoomState, IRoomList, IFriend } from "@type/roomList";

const initialRoomState: IRoomState = {
  hasRoom: false,
  unReadRoom: 0,
  roomList: [],
  searchText: "",
  friendList: [],
  currentRoom: { roomInfo: null, chatData: [] },
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState: initialRoomState,
  reducers: {
    updateRoomData(
      state,
      action: PayloadAction<{
        room: IRoomList[] | [];
        friend: IFriend[] | [];
      }>
    ) {
      const { room, friend } = action.payload;

      if (room) {
        const unReadRoom = room?.filter(
          (room: IRoomList) => room.unReadChatLength > 0
        )?.length;

        state.hasRoom = room?.length > 0;
        state.unReadRoom = unReadRoom || 0;
        state.roomList = room;
      }
      if (friend) {
        state.friendList = friend;
      }
    },
    updateCurrentRoomData(state, action: PayloadAction<{ room: IRoom }>) {
      const { room } = action.payload;

      if (room) {
        state.currentRoom = {
          roomInfo: room?.roomInfo,
          chatData: room?.chatData,
        };
      }
    },
    updateSearchText(state, action: PayloadAction<{ text: string }>) {
      const { text } = action.payload;

      state.searchText = text;
    },
  },
});

export const roomAction = roomSlice.actions;
export const roomReducer = roomSlice.reducer;

const selectHasRoom = (state: rootState) => state.roomReducer.hasRoom;
const selectUnReadRoom = (state: rootState) => state.roomReducer.unReadRoom;
const selectRoomListData = (state: rootState) => state.roomReducer.roomList;
const selectSearchText = (state: rootState) => state.roomReducer.searchText;
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
  selectSearchText,
  selectCurrentRoomId,
  selectCurrentRoomInfo,
  selectCurrentChatData,
  selectFriendList,
};
