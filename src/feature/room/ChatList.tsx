import { ReactElement, Fragment, useState, useEffect, useRef } from "react";
import * as Redux from "react-redux";
import styled from "@emotion/styled";
import { chatAPI } from "../../api/api.sample";
import { IChatItem } from "../../types";
import dummyData from "../../data/data.sample"; // TODO: 제거

import { roomSelector, roomAction } from "./RoomSlice";
import { roomListAction, roomListParser, roomDataParser } from "../RoomList";
import { Avatar } from "../../components/avatar";
import { Textarea } from "../../components/input";

export function ChatList(): ReactElement {
  const dispatch = Redux.useDispatch();
  const scrollTargetRef = useRef() as React.MutableRefObject<HTMLLIElement>;
  const roomInfo = Redux.useSelector(roomSelector.selectRoomInfo);
  const chatData = Redux.useSelector(roomSelector.selectChatData);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    const { current } = scrollTargetRef;
    if (current) {
      setTimeout(() => current.scrollIntoView({ behavior: "smooth" }), 0);
    }
  });

  const getRoomListData = async () => {
    const data = await chatAPI.getChatData();
    if (data) {
      const pasedData = roomListParser(dummyData.authUser.id, data);

      dispatch(roomListAction.setRoomListData({ data: pasedData }));
    }
  };

  const onSubmitNewChat = async () => {
    if (roomInfo?.roomId && textValue) {
      const data = await chatAPI.addRoomNewChat(roomInfo.roomId, textValue);
      if (data) {
        const pasedData = roomDataParser(dummyData.authUser.id, data);

        getRoomListData();
        dispatch(
          roomAction.setRoomData({
            data: pasedData,
          })
        );
        setTextValue("");
      }
    }
    return false;
  };

  return (
    <ChatListWrapStyle>
      <ChatListStyle>
        {chatData.map((chat: IChatItem, index: number) => {
          const {
            user,
            isAuth,
            isDateGroup,
            isMinuteGroup,
            time,
            timeToString,
            dateToString,
            unReadLength,
            data,
          } = chat;
          const { nickName, avatarUrl } = user;

          const checkEnterInData = data.replace(/\n/g, "<br/>");

          return (
            <li key={time}>
              {index !== 0 && !isDateGroup && (
                <DateLineStyle>
                  <span>{dateToString}</span>
                </DateLineStyle>
              )}

              <ChatInfoStyle>
                <Avatar hideLine={true} url={avatarUrl} />
                <strong>{nickName}</strong>
              </ChatInfoStyle>

              <ChatDataStyle
                dangerouslySetInnerHTML={{ __html: checkEnterInData }}
              />

              <TimeDataStyle>
                {!isMinuteGroup && (
                  <Fragment>
                    <span>- {timeToString}</span>

                    {unReadLength > 0 && (
                      <UnReadDataStyle>{unReadLength}</UnReadDataStyle>
                    )}
                  </Fragment>
                )}
              </TimeDataStyle>
            </li>
          );
        })}
        <li ref={scrollTargetRef} />
      </ChatListStyle>

      <Textarea
        value={textValue}
        onChange={setTextValue}
        onSubmit={onSubmitNewChat}
      />
    </ChatListWrapStyle>
  );
}

const ChatListWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px 30px 20px;
  box-sizing: border-box;
`;

const ChatListStyle = styled.ol`
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  > li + li {
    margin-top: 20px;
  }
`;

const ChatDataStyle = styled.p`
  margin-left: 60px;
  line-height: 1.5;
`;

const TimeDataStyle = styled.div`
  margin: 10px 0 0 60px;
  font-size: 12px;
  span {
    color: #ccc;
  }
`;

const UnReadDataStyle = styled.span`
  margin-left: 5px;
  color: #4261e6 !important;
`;

const ChatInfoStyle = styled.div`
  display: flex;
  align-items: center;
  > strong {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const DateLineStyle = styled.span`
  overflow: hidden;
  display: block;
  position: relative;
  height: 15px;
  margin: 10px 0;
  text-align: center;
  > span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 15px;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    background-color: #fff;
    color: rgba(54, 58, 66, 0.4);
  }
  &:before {
    display: inline-block;
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e6e6eb;
    content: "";
  }
`;
