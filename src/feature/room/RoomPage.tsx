import { ReactElement } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";

import { RoomTop } from "./RoomTop";
import { ChatList } from "./ChatList";
import { roomSelector } from "./RoomSlice";
import { NoData } from "../../components/noData";

export function RoomPage(): ReactElement {
  const hasRoomData = Redux.useSelector(roomSelector.selectRoomInfo);

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
