import styled from "@emotion/styled";

import { RoomList } from "./RoomList";
import { NoData } from "../../components/noData";

export function RoomListPage() {
  const data = false;

  return (
    <RoomListWrapStyle>
      <div>top</div>

      {data ? <RoomList /> : <NoData desc="대화방이 없습니다." />}
    </RoomListWrapStyle>
  );
}

const RoomListWrapStyle = styled.div`
  height: 100%;
`;
