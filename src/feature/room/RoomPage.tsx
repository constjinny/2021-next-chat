import { ReactElement, useCallback, useEffect } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI } from "../../api/api.sample";
import dummyData from "../../data/data.sample"; // TODO: 제거

import { RoomTop } from "./RoomTop";
import { ChatList } from "./ChatList";
import { roomSelector, roomAction } from "./RoomSlice";
import { roomListParser, roomDataParser, roomListAction } from "../RoomList";
import { NoData } from "../../components/noData";

export function RoomPage(): ReactElement {
  const dispatch = Redux.useDispatch();
  const hasRoomData = Redux.useSelector(roomSelector.selectRoomInfo);
  const roomId = Redux.useSelector(roomSelector.selectRoomId);

  const getRoomListData = useCallback(async () => {
    const data = await chatAPI.getChatData();
    if (data) {
      const pasedData = roomListParser(dummyData.authUser.id, data);

      dispatch(roomListAction.setRoomListData({ data: pasedData }));
    }
  }, [dispatch]);

  const updatVisitTime = useCallback(async () => {
    if (roomId) {
      const data = await chatAPI.updateRoomVisitTime(roomId);
      if (data) {
        const pasedData = roomDataParser(dummyData.authUser.id, data);

        getRoomListData();
        dispatch(
          roomAction.setRoomData({
            data: pasedData,
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
        {hasRoomData ? <ChatList /> : <NoData desc="선택한 대화가 없습니다." />}
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
