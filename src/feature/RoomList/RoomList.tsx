import { ReactElement, Fragment } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { IRoomList } from "../../types";
import { chatAPI } from "../../api/api.sample";
import dummyData from "../../data/data.sample"; // TODO: 제거

import { roomDataParser } from "./RoomListParser";
import { roomListSelector } from "./RoomListSlice";
import { roomAction } from "../room";
import { Avatar } from "../../components/avatar";

export function RoomList(): ReactElement {
  const dispatch = Redux.useDispatch();
  const roomList = Redux.useSelector(roomListSelector.selectRoomListData);

  // NOTI: 선택한 채팅방 데이터 조회
  const handleShowChat = (roomId: string) => {
    const data = chatAPI.getRoomData(roomId);
    if (data) {
      const pasedData = roomDataParser(dummyData.authUser.id, data);

      dispatch(roomAction.setRoomData({ data: pasedData }));
    }
  };

  return (
    <Fragment>
      {roomList.map((room: IRoomList) => {
        const unRead = room.unReadChatLength > 0;
        const roomNameText = unRead
          ? `${room.roomName}(${room.unReadChatLength})`
          : room.roomName;

        return (
          <RoomItemStyle
            key={room.roomId}
            isOn={false}
            onClick={() => handleShowChat(room.roomId)}
          >
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
    flex: 0 0 50px;
  }
`;

const RoomItemInfoStyle = styled.div`
  overflow: hidden;
  flex: 1;
  position: relative;
  margin-left: 10px;
  padding-bottom: 25px;
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
