import { ReactElement } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";

import { RoomList } from "./RoomList";
import { RoomListTop } from "./RoomListTop";
import { roomSelector } from "./RoomSlice";

import { useData } from "@hooks/useData";
import { NoData } from "@components/noData";

export function RoomListPage(): ReactElement {
  const hasRoom = Redux.useSelector(roomSelector.selectHasRoom);
  const searchText = Redux.useSelector(roomSelector.selectSearchText);
  const nodataMsg = searchText.length
    ? "검색 결과가 없습니다."
    : "대화방이 없습니다.";

  useData();

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
