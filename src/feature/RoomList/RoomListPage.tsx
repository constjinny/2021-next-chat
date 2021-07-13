import { ReactElement, useEffect, useCallback } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI } from "../../api/api.sample";
import dummyData from "../../data/data.sample";

import { RoomList } from "./RoomList";
import { RoomListTop } from "./RoomListTop";
import { roomListParser } from "./RoomListParser";
import { roomListAction, roomListSelector } from "./RoomListSlice";
import { NoData } from "../../components/noData";

export function RoomListPage(): ReactElement {
  const dispatch = Redux.useDispatch();
  const hasRoom = Redux.useSelector(roomListSelector.selectHasRoom);
  const onSearch = Redux.useSelector(roomListSelector.selectOnSearch);
  const nodataMsg = onSearch ? "검색 결과가 없습니다." : "대화방이 없습니다.";

  const getRoomListData = useCallback(async () => {
    const data = await chatAPI.getChatData();
    const pasedData = roomListParser(dummyData.authUser.id, data);

    dispatch(roomListAction.setRoomListData({ data: pasedData }));
  }, [dispatch]);

  useEffect(() => {
    getRoomListData();
  }, [getRoomListData]);

  return (
    <RoomListWrapStyle>
      <RoomListTop />

      {hasRoom ? <RoomList /> : <NoData desc={nodataMsg} />}
    </RoomListWrapStyle>
  );
}

const RoomListWrapStyle = styled.div`
  height: 100%;
`;
