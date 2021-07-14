import { ReactElement, useCallback, useEffect } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI } from "@api/api.sample";
import dummyData from "@data/data.sample"; // TODO: 제거

import { RoomTop } from "./RoomTop";
import { ChatList } from "./ChatList";
import { ChatTextarea } from "./ChatTextarea";

import {
  roomAction,
  roomSelector,
  roomListParser,
  roomDataParser,
} from "@features/nameChange";
import { NoData } from "@components/noData";

export function RoomPage(): ReactElement {
  const dispatch = Redux.useDispatch();
  const roomId = Redux.useSelector(roomSelector.selectCurrentRoomId);
  const hasRoomData = Redux.useSelector(roomSelector.selectCurrentRoomInfo);

  // NOTI: 2. 전체 대화방 데이터 업데이트
  const getRoomListData = useCallback(async () => {
    const chatDataAPI = await chatAPI.getChatData();
    if (chatDataAPI) {
      const pasedChatData = roomListParser(dummyData.authUser.id, chatDataAPI);

      dispatch(roomAction.setRoomListData({ chat: pasedChatData }));
    }
  }, [dispatch]);

  // NOTI: 1. 대화방 방문 시간 업데이트
  const updatVisitTime = useCallback(async () => {
    if (roomId) {
      const roomDataAPI = await chatAPI.updateRoomVisitTime(roomId);
      if (roomDataAPI) {
        const pasedRoomData = roomDataParser(
          dummyData.authUser.id,
          roomDataAPI
        );

        getRoomListData();
        dispatch(
          roomAction.setCurrentRoomData({
            room: pasedRoomData,
          })
        );
      }
    }
  }, [dispatch, roomId, getRoomListData]);

  useEffect(() => {
    updatVisitTime();
  }, [updatVisitTime]);

  return (
    <RoomWrapStyle>
      <RoomTop />

      <RoomInnerStyle>
        {hasRoomData ? (
          <ChatWrapStyle>
            <ChatList />
            <ChatTextarea />
          </ChatWrapStyle>
        ) : (
          <NoData desc="선택한 대화가 없습니다." />
        )}
      </RoomInnerStyle>
    </RoomWrapStyle>
  );
}

const RoomWrapStyle = styled.div`
  height: 100%;
`;

const RoomInnerStyle = styled.div`
  height: calc(100% - 101px);
  border-left: 1px solid #cccccc;
  box-sizing: border-box;
`;

const ChatWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px 30px 20px;
  box-sizing: border-box;
`;
