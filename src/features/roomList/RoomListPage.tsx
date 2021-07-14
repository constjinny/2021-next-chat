import { ReactElement, useEffect, useCallback } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI, friendAPI } from "@api/api.sample";
import dummyData from "@data/data.sample"; // TODO: 제거

import { RoomList } from "./roomList";
import { RoomListTop } from "./RoomListTop";
import { roomListParser, friendDataParser } from "./RoomParser";
import { roomAction, roomSelector } from "./RoomSlice";

import { NoData } from "@components/noData";

export function RoomListPage(): ReactElement {
  const dispatch = Redux.useDispatch();
  const hasRoom = Redux.useSelector(roomSelector.selectHasRoom);
  const onSearch = Redux.useSelector(roomSelector.selectOnSearch);
  const nodataMsg = onSearch ? "검색 결과가 없습니다." : "대화방이 없습니다.";

  // NOTI: 페이지 진입시 데이터를 가져온다.
  const getRoomListData = useCallback(async () => {
    const chatDataAPI = await chatAPI.getChatData();
    const friendDataAPI = await friendAPI.getFriendData();
    if (chatDataAPI && friendDataAPI) {
      const pasedChatData = roomListParser(dummyData.authUser.id, chatDataAPI);
      const pasedFriendData = friendDataParser(friendDataAPI, chatDataAPI);

      dispatch(
        roomAction.setRoomListData({
          chat: pasedChatData,
          friend: pasedFriendData,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    getRoomListData();
  }, [getRoomListData]);

  return (
    <RoomListWrapStyle>
      <RoomListTop />

      {hasRoom ? <RoomList /> : <NoData calc={"172px"} desc={nodataMsg} />}
    </RoomListWrapStyle>
  );
}

const RoomListWrapStyle = styled.div`
  height: 100%;
`;
