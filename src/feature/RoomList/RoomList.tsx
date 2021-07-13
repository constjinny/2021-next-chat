import { ReactElement, Fragment } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { IRoomList } from "../../types";

import { roomListSelector } from "./RoomListSlice";
import { Avatar } from "../../components/avatar";

export function RoomList(): ReactElement {
  const roomList = Redux.useSelector(roomListSelector.selectRoomListData);

  return (
    <Fragment>
      {roomList.map((room: IRoomList) => {
        const unRead = room.unReadChatLength > 0;
        const roomNameText = unRead
          ? `${room.roomName}(${room.unReadChatLength})`
          : room.roomName;

        console.log(room);

        return (
          <RoomItemStyle key={room.roomId} isOn={false} onClick={() => {}}>
            <Avatar isFriend={room.roomImg.isFriend} url={room.roomImg.url} />

            <RoomItemInfoStyle>
              <RoomItemNameStyle isBold={unRead}>
                <span>{roomNameText}</span>
                <span>{room.lastChatTime}</span>
              </RoomItemNameStyle>
              <RoomItemLastChatStyle>
                <span>{room.lastChatData}</span>
              </RoomItemLastChatStyle>
            </RoomItemInfoStyle>
          </RoomItemStyle>
        );
      })}
    </Fragment>
  );
}

const RoomItemStyle = styled.div<{ isOn: boolean }>`
  display: flex;
  align-items: center;
  min-height: 100px;
  padding: 0 10px;
  border-bottom: 1px solid #e4e4e4;
  &:hover {
    cursor: pointer;
    background-color: #eff2f7;
  }
  > div:first-of-type {
    flex: 0 0 54px;
  }
`;

const RoomItemInfoStyle = styled.div`
  overflow: hidden;
  flex: 1;
  position: relative;
  margin-left: 10px;
  padding-bottom: 31px;
`;

const RoomItemNameStyle = styled.strong<{ isBold: boolean }>`
  span:first-of-type {
    ${({ isBold }) => isBold && "font-weight: 700"};
  }
  span + span {
    position: relative;
    margin-left: 10px;
    padding-left: 10px;
    color: #999;
    &:after {
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 3px;
      height: 3px;
      margin-top: -2px;
      border-radius: 50%;
      background-color: #aaa;
      vertical-align: top;
      content: "";
    }
  }
`;

const RoomItemLastChatStyle = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 17px;
  span {
    overflow: hidden;
    display: block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
