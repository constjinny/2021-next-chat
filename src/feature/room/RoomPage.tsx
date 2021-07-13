import styled from "@emotion/styled";

import { Room } from "./Room";
import { NoData } from "../../components/noData";

export function RoomPage() {
  const data = false;

  return (
    <RoomWrapStyle>
      <div>top</div>

      {data ? <Room /> : <NoData desc="선택한 대화가 없습니다." />}
    </RoomWrapStyle>
  );
}

const RoomWrapStyle = styled.div`
  height: 100%;
`;
