import { useCallback } from "react";
import * as Redux from "react-redux";
import { chatAPI, friendAPI } from "@api/api.sample";
import dummyData from "@data/data.sample"; // TODO: 제거

import {
  roomAction,
  roomSelector,
  roomListParser,
  friendDataParser,
} from "@features/roomList";

export function useData() {
  const dispatch = Redux.useDispatch();
  const searchText = Redux.useSelector(roomSelector.selectSearchText);

  const getRoomListData = useCallback(async () => {
    const roomListDataAPI = await chatAPI.getChatData(searchText);
    const friendDataAPI = await friendAPI.getFriendData();

    if (roomListDataAPI && friendDataAPI) {
      const pasedRoomListData = roomListParser(
        dummyData.authUser.id,
        roomListDataAPI
      );
      const pasedFriendData = friendDataParser(friendDataAPI, roomListDataAPI);

      dispatch(
        roomAction.updateRoomData({
          room: pasedRoomListData,
          friend: pasedFriendData,
        })
      );
    }
  }, [dispatch, searchText]);

  getRoomListData();
}
