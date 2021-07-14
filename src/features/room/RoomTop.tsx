import { ReactElement } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import colors from "@constants/colors";

import { roomSelector } from "@features/roomList";
import { Tag } from "@components/tag";

export function RoomTop(): ReactElement {
  const roomInfo = Redux.useSelector(roomSelector.selectCurrentRoomInfo);

  return (
    <TopWrapStyle>
      {roomInfo && (
        <RoomInfoStyle>
          <strong>
            {roomInfo?.roomName}
            <Tag isFriend={roomInfo?.isFriend} margin={"3px 0 0 9px"} />
          </strong>

          <span>{roomInfo?.roomJob}</span>
        </RoomInfoStyle>
      )}
    </TopWrapStyle>
  );
}

const TopWrapStyle = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 80px;
    margin-top: -40px;
    background-color: ${colors.lightPurple};
    vertical-align: top;
    content: "";
  }
`;

const RoomInfoStyle = styled.div`
  > strong {
    font-size: 24px;
  }
  > span {
    display: block;
    margin-top: 5px;
    color: ${colors.purple};
  }
`;
